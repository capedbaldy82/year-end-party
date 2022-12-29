import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import Icon from "./Icon";

const Container = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;

  color: white;
`;

const Left = styled.div``;

const Right = styled.div``;

const Menus = styled.ul`
  display: flex;
  align-items: center;
`;

const Menu = styled.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
`;

const MenuName = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #ffffff;
`;

function Header() {
  const router = useRouter();
  const userId = router.query.userId as string;

  const onClickToHome = () => {
    router.push("/");
  };

  const onClickToTable = () => {
    router.push(`/${userId}/table`);
  };

  const onClickToAnswer = () => {
    router.push(`/${userId}/answer`);
  };

  return (
    <Container>
      <Left></Left>
      <Title onClick={onClickToHome}>송년회</Title>
      <Right>
        <Menus>
          <Menu onClick={onClickToTable}>
            <Icon name="home_off" />
            <MenuName>마이페이지</MenuName>
          </Menu>
          <Menu onClick={onClickToAnswer}>
            <Icon name="people_off" />
            <MenuName>답변보기</MenuName>
          </Menu>
        </Menus>
      </Right>
    </Container>
  );
}

export default Header;
