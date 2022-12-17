import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Tags from "../../components/Tags";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";

export default function GustBookPage() {
  return (
    <Layout>
      <div>송년회 글</div>
      <TextInput label="닉네임" placeholder="닉네임을 작성해주세요." />
      <Tags />
      <TextArea label="답글" placeholder="답글을 작성해주세요." />
      <Button title="방명록 등록" />
    </Layout>
  );
}
