import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import KaKaoLoginButton from "../components/KaKaoLoginButton";
import { css } from "@emotion/react";

const Contianer = styled.div``;

const Hands = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftHand = styled.img<{ init: boolean }>`
  width: 50%;
  translate: -80%;
  opacity: 0;
  transition: all 1s;

  ${({ init }) =>
    init &&
    css`
      translate: 0%;
      opacity: 1;
    `}
`;

const RightHand = styled.img<{ init: boolean }>`
  width: 50%;
  translate: 80%;
  opacity: 0;

  transition: all 1s;
  ${({ init }) =>
    init &&
    css`
      translate: 0%;
      opacity: 1;
    `}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const Description = styled.div`
  margin-top: 8px;

  font-size: 16px;
  font-weight: 400;
  color: white;

  margin-bottom: 40px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LandingPage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <Layout>
      <Contianer>
        <Title>송년회 건배사를</Title>
        <Title>작성해주세요</Title>
        <Description>건배사를 작성하고 마음을 주고받으세요.</Description>
        <Hands>
          <LeftHand src="/img/main_left.png" init={init} />
          <RightHand src="/img/main_right.png" init={init} />
        </Hands>
        <Actions>
          <KaKaoLoginButton />
        </Actions>
      </Contianer>
    </Layout>
  );
}
