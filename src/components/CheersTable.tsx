import styled from "@emotion/styled";
import React from "react";
import Icon from "./Icon";

const Container = styled.div`
  width: 100%;
  height: 360px;

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CheersTable() {
  return (
    <Container>
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <Item key={i}>
            <Icon name="beer" size={64} />
          </Item>
        ))}
    </Container>
  );
}

export default CheersTable;
