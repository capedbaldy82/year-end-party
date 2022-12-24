import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

const StyledButton = styled.button`
  cursor: pointer;

  width: 100%;
  padding: 16px;

  background-color: #f2a876;

  border: none;
  border-radius: 4px;

  color: white;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  return <StyledButton {...props}>{title}</StyledButton>;
}

export default Button;
