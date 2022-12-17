import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

const StyledTextArea = styled.textarea`
  resize: none;
  outline: none;

  width: 100%;
  height: 200px;

  padding: 4px;

  border-radius: 4px;
`;

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {}

function TextArea({ ...props }: TextAreaProps) {
  return <StyledTextArea {...props} />;
}

export default TextArea;
