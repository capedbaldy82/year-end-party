import styled from "@emotion/styled";
import React from "react";
import Answer from "../../components/Answer";
import Button from "../../components/Button";
import Description from "../../components/Description";
import Layout from "../../components/Layout";
import Spacer from "../../components/Spacer";
import TextBox from "../../components/TextBox";
import Title from "../../components/Title";

const Container = styled.div``;

function AnswerPage() {
  return (
    <Layout>
      <Container>
        <Title text="친구의 건배사 답변" />
        <Description text="내가 작성한 건배사에 대한 친구들의 답변입니다." />
        <Spacer my={16} />
        <TextBox text="청바지! 청춘은 바로 지금입니다. 한 해 수고하셨어요.청바지! 청춘은 바로 지금입니다. 한 해 수고하셨어요.청바지! 청춘은 바로 지금입니다. 한 해 수고하셨어요.청바지! 청춘은 바로 지금입니다. 한 해 수고하셨어요.청바지! 청춘은 바로 지금입니다. 한 해 수고하셨어요.청바지! 청춘은 바로 지금입니다. 한 해 수고하셨어요.청바지! 청춘은 바로 지금입니다. 한 해 수고하셨어요." />
        <Spacer my={16} />
        <Answer />
        <Spacer my={16} />
        <Answer />
        <Spacer my={32} />
        <Button title="마이페이지 가기" />
      </Container>
    </Layout>
  );
}

export default AnswerPage;
