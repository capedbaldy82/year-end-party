import styled from "@emotion/styled";
import React from "react";

const Container = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;

  color: white;
`;

function Header() {
  return (
    <Container>
      <Title>송년회</Title>
    </Container>
  );
}

export default Header;
