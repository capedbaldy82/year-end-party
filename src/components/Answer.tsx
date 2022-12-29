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

interface Props {
  badge: string;
  name: string;
  content: string;
}

function Answer({ badge, name, content }: Props) {
  return (
    <Container>
      <Info>
        <Icon name={badge} />
        <Name>{name}</Name>
      </Info>
      <TextBox text={content} />
    </Container>
  );
}

export default Answer;
