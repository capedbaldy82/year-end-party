import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";

export default function RollingPaperPage() {
  return (
    <Layout>
      <TextInput placeholder="작성 유도 문구" />
      <TextArea placeholder="작성 유도 문구" />
      <Button title="공유하기" />
    </Layout>
  );
}
