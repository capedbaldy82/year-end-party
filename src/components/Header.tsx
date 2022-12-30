import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { userInfoState } from '../atoms';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Icon from './Icon';
import { useEffect } from 'react';
import { useState } from 'react';

const Container = styled.header`
  position: relative;
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;

  font-size: 24px;
  font-weight: 700;

  color: white;
`;

const Left = styled.div``;

const Right = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Menus = styled.ul`
  display: flex;
  align-items: center;

  height: 60px;
`;

const Menu = styled.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
`;

const MenuName = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;

  color: #ffffff;
`;

function Header() {
  const router = useRouter();
  const userId = router.query.userId as string;
  const myUserInfo = useRecoilValue(userInfoState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);

  const onClickToHome = () => {
    router.push('/');
  };

  const onClickToTable = () => {
    if (!myUserInfo.id) return;
    router.push(`/${myUserInfo.id}/table`);
  };

  const onClickToAnswer = () => {
    router.push(`/${userId}/answer`);
  };

  const checkIsLoggedIn = () => {
    if (!myUserInfo) return;

    if (myUserInfo.isLoggedIn) {
      setIsLoggedIn(true);
    }
  };

  const checkIsMyPage = () => {
    if (!router.query.userId) return;
    if (!myUserInfo.id) return;

    if (router.query.userId) {
      if (+router.query.userId === myUserInfo.id) {
        setIsMyPage(true);
      } else {
        setIsMyPage(false);
      }
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
    checkIsMyPage();
  }, [myUserInfo, router]);

  return (
    <Container>
      <Left></Left>
      <Title onClick={onClickToHome}>송년회</Title>
      <Right>
        {isLoggedIn && (
          <Menus>
            <Menu onClick={onClickToTable}>
              <Icon name="home_off" />
              <MenuName>마이페이지</MenuName>
            </Menu>
            {isMyPage ? (
              <Menu onClick={onClickToAnswer}>
                <Icon name="people_off" />
                <MenuName>답변보기</MenuName>
              </Menu>
            ) : null}
          </Menus>
        )}
      </Right>
    </Container>
  );
}

export default Header;
