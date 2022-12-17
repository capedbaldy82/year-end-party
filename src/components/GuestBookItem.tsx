import styled from "@emotion/styled";
import React from "react";

const Container = styled.li``;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Writer = styled.div``;

const Timestamp = styled.div``;

const Content = styled.div`
  padding: 8px;

  border-radius: 8px;

  background-color: gray;
`;

function GuestBookItem() {
  return (
    <Container>
      <Info>
        <Writer>작성자명</Writer>
        <Timestamp>타임스탬프</Timestamp>
      </Info>
      <Content>Content</Content>
    </Container>
  );
}

export default GuestBookItem;
