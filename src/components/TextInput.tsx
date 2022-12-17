import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

const StyledTextInput = styled.input`
  outline: none;

  width: 100%;

  padding: 4px;

  border-radius: 4px;
`;

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {}

function TextInput({ ...props }: TextInputProps) {
  return <StyledTextInput {...props} />;
}

export default TextInput;
