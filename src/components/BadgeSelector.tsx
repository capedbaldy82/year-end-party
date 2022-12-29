import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Icon from "./Icon";

const Container = styled.div`
  width: 100%;
  height: 360px;

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Badges = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Badge = styled.button<{ selected: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 16px;
  border: 1px solid transparent;
  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid white;
      border-radius: 9999px;
    `}
`;

interface Props {
  value: string;
  onClick?: (value: string) => void;
}

function BadgeSelector({ value, onClick = () => {} }: Props) {
  return (
    <Container>
      <Badges>
        <Badge onClick={() => onClick("beer")} selected={value === "beer"}>
          <Icon name="beer" size={80} />
        </Badge>
        <Badge
          onClick={() => onClick("makgeolli")}
          selected={value === "makgeolli"}
        >
          <Icon name="makgeolli" size={80} />
        </Badge>
        <Badge onClick={() => onClick("soju")} selected={value === "soju"}>
          <Icon name="soju" size={80} />
        </Badge>
      </Badges>
      <Badges>
        <Badge
          onClick={() => onClick("whiskey")}
          selected={value === "whiskey"}
        >
          <Icon name="whiskey" size={80} />
        </Badge>
        <Badge onClick={() => onClick("wine")} selected={value === "wine"}>
          <Icon name="wine" size={80} />
        </Badge>
      </Badges>
    </Container>
  );
}

export default BadgeSelector;
