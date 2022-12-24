import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import KaKaoLoginButton from "../components/KaKaoLoginButton";
import Title from "../components/Title";
import Description from "../components/Description";
import Spacer from "../components/Spacer";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../atoms";
import KakaoLogin from "react-kakao-login";

const Contianer = styled.div``;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LandingPage() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const onSuccess = async ({
    profile: {
      id,
      properties: { nickname },
    },
  }: any) => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kakao_id: id,
          name: nickname,
        }),
      });

      const res = await response.json();
      if (res.ok) {
        setUserInfo({
          isLoggedIn: true,
          id: res.uuid,
          name: res.name,
          token: res.access_token,
        });
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      router.replace(`/${userInfo.id}/cheers`);
    }
  }, [userInfo, router]);

  return (
    <Layout>
      <Contianer>
        <Title text="송년회 건배사를" />
        <Title text="작성해주세요" />
        <Description text="건배사를 작성하고 마음을 주고받으세요" />
        <Spacer my={200} />
        <Actions>
          <KakaoLogin
            token="ae9591959993b2e07fa27cf3c424b5f0"
            onSuccess={onSuccess}
            onFail={console.error}
            onLogout={console.info}
            render={({ onClick }) => <KaKaoLoginButton onClick={onClick} />}
            throughTalk
          />
        </Actions>
      </Contianer>
    </Layout>
  );
}
