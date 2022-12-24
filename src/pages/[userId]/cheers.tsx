import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../atoms";
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
  const userInfo = useRecoilValue(userInfoState);

  const [text, setText] = useState("");
  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setText(value.trimStart());
  };

  const onSubmit = async () => {
    if (text.length === 0) {
      return alert("건배사를 입력해주세요!");
    }
    if (!userInfo.isLoggedIn) {
      return alert("로그인을 해주세요!");
    }
    try {
      const response = await fetch("/api/rollingpaper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({
          content: text,
        }),
      });

      const res = await response.json();
      if (res.ok) {
        alert("건배사가 저장되었습니다. 친구들에게 공유해보세요!");
        router.push(`/${userId}/table`);
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
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
    if (!userInfo.isLoggedIn) {
      router.replace("/");
    }
  }, [userInfo, router]);

  useEffect(() => {
    if (userId) {
      getContent();
    }
  }, [userId]);

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
