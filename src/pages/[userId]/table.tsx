import styled from '@emotion/styled';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../atoms';
import Button from '../../components/Button';
import CheersTable from '../../components/CheersTable';
import Description from '../../components/Description';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';
import Title from '../../components/Title';

const Container = styled.div``;

const TablePage = ({ username }: { username: string }) => {
  const router = useRouter();
  const userId = router.query.userId as string;
  const userInfo = useRecoilValue(userInfoState);
  const [posts, setPosts] = useState<{ id: number; badge: string }[]>([]);
  const myUserInfo = useRecoilValue(userInfoState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);
  const [isWrote, setIsWrote] = useState(false);

  const copyURL = () => {
    let currentUrl = window.document.location.href;
    let t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = currentUrl.replace('table', 'excheers');
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);

    alert('링크가 복사되었습니다. 친구에게 공유해보세요!');
  };

  const getPosts = async () => {
    if (!userId) return;
    try {
      const response = await fetch(`/api/post/${userId}`);
      const res = await response.json();

      if (res.ok) {
        setPosts(res.posts);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [userId]);

  const onClickExCheers = () => {
    router.push(`/${userId}/excheers`);
  };

  const onClickLogin = () => {
    router.push(`/`);
  };

  const checkIsLoggedIn = () => {
    if (!userInfo) return;
    if (userInfo.isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const checkIsMyPage = () => {
    if (!router.query.userId) return;
    if (!myUserInfo.id) return;

    if (+router.query.userId === myUserInfo.id) {
      setIsMyPage(true);
    } else {
      setIsMyPage(false);
    }
  };

  const checkIsWrote = () => {
    const wrote = localStorage.getItem('wrote');
    if (!wrote) return;
    if (!userId) return;

    const parsedWrote = JSON.parse(wrote);

    if (parsedWrote.includes(+userId)) {
      setIsWrote(true);
    } else {
      setIsWrote(false);
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
    checkIsMyPage();
    checkIsWrote();
  }, [router, userInfo]);

  return (
    <Layout>
      <Container>
        <Title text={username !== 'error' ? `${username}님의 건배사 테이블` : '건배사 테이블'} />
        <Description text="친구들의 맞건배사 모음 공간입니다. :)" />
        <Spacer my={40} />
        <CheersTable posts={posts} />
        <Spacer my={40} />
        {isLoggedIn ? (
          isMyPage ? (
            <Button title="내 건배사 링크 복사" onClick={copyURL} />
          ) : isWrote ? null : (
            <Button title="맞건배사 쓰러가기" onClick={onClickExCheers} />
          )
        ) : isWrote ? (
          <Button title="내 건배사 쓰러가기" onClick={onClickLogin} />
        ) : (
          <Button title="맞건배사 쓰러가기" onClick={onClickExCheers} />
        )}
      </Container>
    </Layout>
  );
};

export default TablePage;

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const dev = process.env.NODE_ENV !== 'production';
  const url = dev ? 'http://localhost:3000' : 'https://www.year-end-party.site';

  try {
    const response = await fetch(`${url}/api/rollingpaper/${query.userId}`);
    const res = await response.json();

    return {
      props: {
        username: res.name,
      },
    };
  } catch (error) {
    return {
      props: {
        username: 'error',
      },
    };
  }
};
