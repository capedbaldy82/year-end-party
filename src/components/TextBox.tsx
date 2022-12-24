import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  width: 100%;

  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 8px;

  padding: 16px;

  color: white;
  font-size: 16px;
  font-weight: 400;
`;

interface Props {
  text: string;
}

function TextBox({ text }: Props) {
  return <Container>{text}</Container>;
}

export default TextBox;
