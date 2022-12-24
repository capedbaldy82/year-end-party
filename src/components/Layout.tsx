import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import Hands from "./Hands";
import Header from "./Header";
import Spacer from "./Spacer";

const Background = styled.div`
  width: 100vw;
  height: 100vh;

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
  height: 100%;
  max-width: 480px;

  overflow-y: auto;
`;

const BackgroundHands = styled.div`
  position: absolute;

  top: 100px;
  left: 0;
  right: 0;
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
        <Children>
          {children}
          <Spacer my={36} />
        </Children>
      </Container>
    </Background>
  );
}

export default Layout;
