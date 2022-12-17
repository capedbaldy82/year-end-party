import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: gray;
`;

const Children = styled.main`
  max-width: 480px;
  min-height: 100vh;

  background-color: white;
`;

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Children>{children}</Children>
    </Container>
  );
}

export default Layout;
