import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

const Container = styled.div``;

const Label = styled.label``;

const StyledTextInput = styled.input`
  outline: none;

  width: 100%;

  padding: 4px;

  border-radius: 4px;
`;

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

function TextInput({ label, ...props }: TextInputProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledTextInput {...props} />
    </Container>
  );
}

export default TextInput;
