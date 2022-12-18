import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  width: 100%;
  word-break: break-all;

  padding: 8px;

  border-radius: 8px;

  background-color: gray;
`;

interface Props {
  text: string;
}

function TextView({ text }: Props) {
  return <Container>{text}</Container>;
}

export default TextView;
