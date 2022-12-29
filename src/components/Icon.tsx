import styled from "@emotion/styled";
import React from "react";

const Container = styled.img``;

interface Props {
  size?: number;
  name:
    | "beer"
    | "makgeolli"
    | "soju"
    | "whiskey"
    | "wine"
    | "home_off"
    | "people_off";
}

function Icon({ size = 24, name }: Props) {
  return <Container src={`/icon/${name}.png`} width={size} height={size} />;
}

export default Icon;
