import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 1px;

  background-color: gray;

  margin: 16px 0px;
`;

function Divider() {
  return <Container />;
}

export default Divider;
