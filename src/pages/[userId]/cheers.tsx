import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import Description from "../../components/Description";
import Layout from "../../components/Layout";
import Spacer from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";

const Contianer = styled.div``;

function CheersPage() {
  const router = useRouter();
  const userId = router.query.userId as string;

  const [text, setText] = useState("");
  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setText(value.trimStart());
  };

  const toTable = () => {
    router.push(`/${userId}/table`);
  };

  const onSubmit = () => {
    if (text.length === 0) {
      return alert("건배사를 입력해주세요!");
    }
    toTable();
  };

  return (
    <Layout>
      <Contianer>
        <Title text="송년회 건배사를" />
        <Title text="작성해주세요" />
        <Spacer my={8} />
        <Description text="건배사를 작성하고 마음을 주고받으세요" />
        <Spacer my={40} />
        <TextArea
          placeholder="건배사를 작성해주세요!"
          count={text.length}
          maxCount={300}
          value={text}
          onChange={onChangeText}
        />
        <Spacer my={32} />
        <Button title="저장하기" onClick={onSubmit} />
      </Contianer>
    </Layout>
  );
}

export default CheersPage;
