import styled from "@emotion/styled";
import React from "react";

const Container = styled.li`
  font-size: 14px;
  font-weight: 400;

  padding: 4px;

  border-radius: 4px;

  background-color: gray;

  margin-right: 8px;
`;

function Tag() {
  return <Container>Tag</Container>;
}

export default Tag;
