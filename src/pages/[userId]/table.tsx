import styled from "@emotion/styled";
import React from "react";
import Button from "../../components/Button";
import CheersTable from "../../components/CheersTable";
import Description from "../../components/Description";
import Layout from "../../components/Layout";
import Spacer from "../../components/Spacer";
import Title from "../../components/Title";

const Container = styled.div``;

function TablePage() {
  const copyURL = () => {
    let currentUrl = window.document.location.href;
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = currentUrl;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);

    alert("링크가 복사되었습니다. 친구에게 공유해보세요!");
  };

  return (
    <Layout>
      <Container>
        <Title text="닉네임님의 건배사 테이블" />
        <Description text="친구들의 맞건배사 모음 공간입니다. :)" />
        <Spacer my={40} />
        <CheersTable />
        <Spacer my={40} />
        <Button title="내 건배사 링크 복사" onClick={copyURL} />
      </Container>
    </Layout>
  );
}

export default TablePage;
