import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

const StyledButton = styled.button`
  width: 100%;

  padding: 8px 16px;

  border-radius: 4px;

  color: white;
  background-color: black;

  text-align: center;
`;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  return <StyledButton {...props}>{title}</StyledButton>;
}

export default Button;
