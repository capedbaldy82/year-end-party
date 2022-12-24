import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import KaKaoLoginButton from '../components/KaKaoLoginButton';
import Title from '../components/Title';
import Description from '../components/Description';
import Spacer from '../components/Spacer';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../atoms';
import KakaoLogin from 'react-kakao-login';
import axios from 'axios';
import { Api } from '../apis';
import { useEffect } from 'react';

const Contianer = styled.div``;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LandingPage() {
  const router = useRouter();
  const userInfo = useRecoilValue(userInfoState);

  const toCheers = () => {
    router.replace(`/${userInfo.id}/cheers`);
  };

  const onSuccess = async ({
    profile: {
      id,
      properties: { nickname },
    },
  }: any) => {
    try {
      console.log(id, nickname);
      // const res = await Api.user.signup(id, nickname);
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          kakao_id: id,
          name: nickname,
        }),
      });

      const res = await response.json();

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Contianer>
        <Title text="송년회 건배사를" />
        <Title text="작성해주세요" />
        <Description text="건배사를 작성하고 마음을 주고받으세요" />
        <Spacer my={300} />
        <Actions>
          <KakaoLogin
            token="ae9591959993b2e07fa27cf3c424b5f0"
            onSuccess={onSuccess}
            onFail={console.error}
            onLogout={console.info}
            render={({ onClick }) => <KaKaoLoginButton onClick={onClick} />}
          />
        </Actions>
      </Contianer>
    </Layout>
  );
}
