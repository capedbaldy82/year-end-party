import styled from "@emotion/styled";
import React from "react";
import Tag from "./Tag";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function Tags() {
  return (
    <Container>
      {Array(6)
        .fill(0)
        .map((j, i) => (
          <Tag key={i} />
        ))}
    </Container>
  );
}

export default Tags;
