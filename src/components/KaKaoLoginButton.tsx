import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

const Container = styled.button`
  width: 100%;
  max-width: 340px;
  height: 60px;
  background-color: #fae300;

  font-size: 16px;
  font-weight: 700;
  color: #391b1b;

  border-radius: 8px;

  cursor: pointer;
  border: none;
  outline: none;
`;

interface KaKaoLoginButtonProps extends HTMLAttributes<HTMLButtonElement> {}

function KaKaoLoginButton({ ...props }: KaKaoLoginButtonProps) {
  return <Container {...props}>카카오계정으로 계속하기</Container>;
}

export default KaKaoLoginButton;
