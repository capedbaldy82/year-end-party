import styled from "@emotion/styled";
import React from "react";
import GuestBookItem from "./GuestBookItem";

const Container = styled.ul``;

const Title = styled.h1``;

function GuestBookList() {
  return (
    <Container>
      <Title>방명록 보기</Title>
      {Array(10)
        .fill(0)
        .map((j, i) => (
          <GuestBookItem key={i} />
        ))}
    </Container>
  );
}

export default GuestBookList;
