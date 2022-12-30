import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

interface Props {
  text: string;
}

function Description({ text }: Props) {
  return <Container>{text}</Container>;
}

export default Description;
