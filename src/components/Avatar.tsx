import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

const Name = styled.div``;

interface Props {
  name?: string;
}

function Avatar({ name }: Props) {
  return (
    <Container>
      <Main src="https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1296&q=60" />
      {name && <Name>{name}</Name>}
    </Container>
  );
}

export default Avatar;
