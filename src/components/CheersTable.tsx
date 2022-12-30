import styled from "@emotion/styled";
import React, { useState } from "react";
import Icon from "./Icon";

const Container = styled.div``;

const Items = styled.div`
  width: 100%;
  height: 360px;

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pages = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 16px;
`;

const PrevPage = styled.button`
  all: unset;
  cursor: pointer;

  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;

  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border-radius: 16px;
`;

const NextPage = styled.button`
  all: unset;
  cursor: pointer;

  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;

  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border-radius: 16px;
`;

const CurPage = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`;

interface Props {
  posts: { id: number; badge: string }[];
}

function CheersTable({ posts }: Props) {
  const [curPage, setCurPage] = useState(1);
  const totalPages = Math.floor(posts.length / 9) + 1;

  const onClickPrev = () => {
    if (curPage > 1) {
      setCurPage((prev) => prev - 1);
    }
  };

  const onClickNext = () => {
    if (curPage < totalPages) {
      setCurPage((prev) => prev + 1);
    }
  };

  const curPosts = posts.slice((curPage - 1) * 9, curPage * 9);

  return (
    <Container>
      <Items>
        {curPosts.map((post) => (
          <Item key={post.id}>
            <Icon
              name={
                post.badge as "beer" | "makgeolli" | "soju" | "whiskey" | "wine"
              }
              size={64}
            />
          </Item>
        ))}
      </Items>
      <Pages>
        <PrevPage onClick={onClickPrev}>{"< 이전"}</PrevPage>
        <CurPage>
          {curPage}/{totalPages}
        </CurPage>
        <NextPage onClick={onClickNext}>{"다음 >"}</NextPage>
      </Pages>
    </Container>
  );
}

export default CheersTable;
