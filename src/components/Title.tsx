import styled from "@emotion/styled";
import React from "react";

const Container = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

interface Props {
  text: string;
}

function Title({ text }: Props) {
  return <Container>{text}</Container>;
}

export default Title;
