import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../atoms";
import Answer from "../../components/Answer";
import Button from "../../components/Button";
import Description from "../../components/Description";
import Layout from "../../components/Layout";
import Spacer from "../../components/Spacer";
import TextBox from "../../components/TextBox";
import Title from "../../components/Title";

const Container = styled.div``;

function AnswerPage() {
  const router = useRouter();
  const userInfo = useRecoilValue(userInfoState);

  const [text, setText] = useState("");
  const [posts, setPosts] = useState<
    {
      id: number;
      name: string;
      badge: string;
      content: string;
    }[]
  >([]);

  const getContent = async () => {
    try {
      const response = await fetch(`/api/rollingpaper/${userInfo.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
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

  const getAnswers = async () => {
    try {
      const response = await fetch(`/api/post/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const res = await response.json();
      if (res.ok) {
        setPosts(res.posts);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      getContent();
      getAnswers();
    } else {
      router.replace("/");
    }
  }, [userInfo]);

  const onClickToTable = () => {
    router.push(`/${userInfo.id}/table`);
  };

  return (
    <Layout>
      <Container>
        <Title text="????????? ????????? ??????" />
        <Description text="?????? ????????? ???????????? ?????? ???????????? ???????????????." />
        <Spacer my={16} />
        <TextBox text={text} />
        <Spacer my={64} />
        {posts.map((post) => (
          <div key={post.id}>
            <Answer
              name={post.name}
              badge={
                post.badge as "beer" | "makgeolli" | "soju" | "whiskey" | "wine"
              }
              content={post.content}
            />
            <Spacer my={16} />
          </div>
        ))}
        <Button title="??????????????? ??????" onClick={onClickToTable} />
      </Container>
    </Layout>
  );
}

export default AnswerPage;
