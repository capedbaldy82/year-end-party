import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";

export default function LandingPage() {
  return (
    <Layout>
      <Button title="Click Me!" onClick={() => alert("Hi!")} />
      <TextInput placeholder="Write Me!" />
      <TextArea placeholder="Write Me!" />
    </Layout>
  );
}
