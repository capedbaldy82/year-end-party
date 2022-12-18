import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

const Container = styled.div``;

const Label = styled.label``;

const StyledTextArea = styled.textarea`
  resize: none;
  outline: none;

  width: 100%;
  height: 200px;

  padding: 4px;

  border-radius: 4px;
`;

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledTextArea {...props} />
    </Container>
  );
}

export default TextArea;
