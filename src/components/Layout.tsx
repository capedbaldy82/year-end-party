import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import Hands from "./Hands";
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
  position: relative;

  width: 100%;
  max-width: 480px;
  min-height: 100vh;
`;

const BackgroundHands = styled.div`
  position: absolute;

  width: 100%;

  top: 15%;
`;

const Children = styled.main`
  position: absolute;

  width: 100%;

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
        <BackgroundHands>
          <Hands />
        </BackgroundHands>
        <Children>{children}</Children>
      </Container>
    </Background>
  );
}

export default Layout;
