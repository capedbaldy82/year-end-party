import styled from "@emotion/styled";
import React from "react";

const Container = styled.div<{ mx: number; my: number }>`
  width: ${({ mx }) => `${mx}px`};
  height: ${({ my }) => `${my}px`};
`;

interface Props {
  mx?: number;
  my?: number;
}

function Spacer({ mx = 0, my = 0 }: Props) {
  return <Container mx={mx} my={my} />;
}

export default Spacer;
