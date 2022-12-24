import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button";
import Description from "../../components/Description";
import Layout from "../../components/Layout";
import Spacer from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import Title from "../../components/Title";

const Container = styled.div``;

function ExcheersPage() {
  const router = useRouter();
  const userId = router.query.userId as string;

  const [text, setText] = useState("");

  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [badge, setBadge] = useState("");
  const [content, setContent] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (value.length > 8) {
      return;
    }
    setName(value.trimStart());
  };

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    if (value.length > 300) {
      return;
    }
    setContent(value.trimStart());
  };

  const getContent = async () => {
    try {
      const response = await fetch(`/api/rollingpaper/${userId}`);
      const res = await response.json();
      if (res.ok) {
        setText(res.content);
      } else {
        setText("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userId) {
      getContent();
    }
  }, [userId]);

  const onClickNext = () => {
    setStep((prev) => prev + 1);
  };

  const onSubmit = async () => {
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: userId,
          name,
          badge: "wine",
          content,
        }),
      });

      const res = await response.json();
      console.log(res);
      if (res.ok) {
        // TO_DO : OK
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      {step === 0 && (
        <Container>
          <Title text="친구의 송년 건배사에 맞건배사를" />
          <Title text="작성해주세요." />
          <Description text="건배사를 작성하고 마음을 주고받으세요." />
          <Spacer my={16} />
          <TextArea value={text} onChange={() => {}} contentEditable={false} />
          <Spacer my={32} />
          <Button title="맞건배사 작성하기" onClick={onClickNext} />
        </Container>
      )}
      {step === 1 && (
        <Container>
          <Title text="닉네임 입력" />
          <Description text="멋진 닉네임을 지정해보세요!" />
          <Spacer my={16} />
          <TextInput
            value={name}
            onChange={onChangeName}
            count={name.length}
            maxCount={8}
          />
          <Spacer my={32} />
          <Button title="다음" onClick={onClickNext} />
        </Container>
      )}
      {step === 2 && (
        <Container>
          <Title text="뱃지 선택" />
          <Description text="건배할 주류 뱃지를 선택해주세요." />
          <Spacer my={16} />

          <Spacer my={32} />
          <Button title="다음" onClick={onClickNext} />
        </Container>
      )}
      {step === 3 && (
        <Container>
          <Title text="맞건배사 입력" />
          <Description text="맞건배사를 작성하고 마음을 전달하세요." />
          <Spacer my={16} />
          <TextArea
            placeholder="맞건배사를 입력해주세요."
            value={content}
            onChange={onChangeContent}
            count={content.length}
            maxCount={300}
          />
          <Spacer my={32} />
          <Button title="작성완료" onClick={onSubmit} />
        </Container>
      )}
    </Layout>
  );
}

export default ExcheersPage;
