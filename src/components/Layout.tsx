import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import Header from "./Header";

const Background = styled.div`
  display: flex;
  justify-content: center;

  background-image: url("/img/background.png");
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;

  background-color: transparent;
`;

const Children = styled.main`
  padding: 0px 16px;
`;

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Background>
      <Container>
        <Header />
        <Children>{children}</Children>
      </Container>
    </Background>
  );
}

export default Layout;
