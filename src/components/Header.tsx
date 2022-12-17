import styled from "@emotion/styled";
import React from "react";

const Container = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return <Container>Header</Container>;
}

export default Header;
