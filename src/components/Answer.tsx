import styled from "@emotion/styled";
import React from "react";
import Icon from "./Icon";
import TextBox from "./TextBox";

const Container = styled.div``;

const Info = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
`;

const Name = styled.div`
  margin-left: 4px;

  font-weight: 700;
  font-size: 16px;

  color: #ffffff;
`;

const Timestamp = styled.div`
  font-weight: 400;
  font-size: 10px;

  color: #ffffff;

  text-align: end;

  margin-top: 4px;
`;

function Answer() {
  return (
    <Container>
      <Info>
        <Icon name="whiskey" />
        <Name>name</Name>
      </Info>
      <TextBox text="kqlwjeklqwjeklqwjeklqwjeklqwejkl" />
      <Timestamp>2022.12.30 12시</Timestamp>
    </Container>
  );
}

export default Answer;
