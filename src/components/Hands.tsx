import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftHand = styled.div<{ init: boolean }>`
  width: 50%;
  height: 300px;
  translate: -80%;
  opacity: 0;
  transition: all 1s;

  ${({ init }) =>
    init &&
    css`
      translate: 0%;
      opacity: 1;
    `}

  background-image: url("/img/main_left.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const RightHand = styled.div<{ init: boolean }>`
  width: 50%;
  height: 300px;
  translate: 80%;
  opacity: 0;

  transition: all 1s;
  ${({ init }) =>
    init &&
    css`
      translate: 0%;
      opacity: 1;
    `}

  background-image: url("/img/main_right.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

function Hands({ init = true }: { init?: boolean }) {
  return (
    <Container>
      <LeftHand init={init} />
      <RightHand init={init} />
    </Container>
  );
}

export default Hands;
