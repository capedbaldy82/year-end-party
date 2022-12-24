import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";

const Container = styled.div`
  width: 100%;
  height: 300px;

  padding: 8px;

  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 8px;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  outline: none;
  border: none;

  width: 100%;
  height: 90%;

  background-color: transparent;

  color: white;
  font-size: 20px;
  font-weight: 400;
`;

const Count = styled.div`
  width: 100%;
  height: 10%;

  font-weight: 400;
  font-size: 12px;

  color: #aaaaaa;

  display: flex;
  justify-content: flex-end;
`;

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  count?: number;
  maxCount?: number;
}

function TextArea({ label, count = 0, maxCount = 0, ...props }: TextAreaProps) {
  return (
    <Container>
      <StyledTextArea {...props} />
      {(count !== 0 || maxCount !== 0) && (
        <Count>
          {count}/{maxCount}
        </Count>
      )}
    </Container>
  );
}

export default TextArea;
