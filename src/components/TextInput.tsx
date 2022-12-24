import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";

const Container = styled.div`
  width: 100%;

  padding: 8px;

  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 8px;
`;

const StyledTextInput = styled.input`
  outline: none;
  border: none;

  width: 100%;

  background-color: transparent;

  font-weight: 400;
  font-size: 16px;

  color: #ffffff;
`;

const Count = styled.div`
  font-weight: 400;
  font-size: 12px;

  color: #aaaaaa;
`;

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  count?: number;
  maxCount?: number;
}

function TextInput({ count = 0, maxCount = 0, ...props }: TextInputProps) {
  return (
    <Container>
      <StyledTextInput {...props} />
      {(count !== 0 || maxCount !== 0) && (
        <Count>
          {count} / {maxCount}
        </Count>
      )}
    </Container>
  );
}

export default TextInput;
