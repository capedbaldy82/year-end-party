import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Answer from '../../components/Answer';
import BadgeSelector from '../../components/BadgeSelector';
import Button from '../../components/Button';
import Description from '../../components/Description';
import Layout from '../../components/Layout';
import Spacer from '../../components/Spacer';
import TextArea from '../../components/TextArea';
import TextBox from '../../components/TextBox';
import TextInput from '../../components/TextInput';
import Title from '../../components/Title';

const Container = styled.div``;

function ExcheersPage() {
  const router = useRouter();
  const userId = router.query.userId as string;

  const [text, setText] = useState('');

  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [badge, setBadge] = useState('beer');
  const onClickBadge = (value: string) => {
    setBadge(value);
  };

  const [content, setContent] = useState('');

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
        setText('');
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
    if (step === 1) {
      if (name.trim() === '') {
        return alert('닉네임을 작성해주세요!');
      }
    }
    setStep((prev) => prev + 1);
  };

  const onSubmit = async () => {
    try {
      if (content.trim() === '') {
        return alert('맞건배사를 작성해주세요!');
      }
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: userId,
          name,
          badge,
          content,
        }),
      });

      const res = await response.json();
      if (res.ok) {
        setStep((prev) => prev + 1);
        setWrote(+userId);
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setWrote = (userId: number) => {
    const wrote = localStorage.getItem('wrote');

    if (wrote) {
      const parsedWrote = JSON.parse(wrote);

      if (parsedWrote.includes(userId)) {
        return;
      }

      if (typeof parsedWrote === 'object') {
        localStorage.setItem('wrote', JSON.stringify([...parsedWrote, userId]));
        console.log(localStorage.getItem('wrote'));
      }
    } else {
      localStorage.setItem('wrote', JSON.stringify([userId]));
    }
  };

  const onClickToTable = () => {
    router.push(`/${userId}/table`);
  };

  const onClickToHome = () => {
    router.push('/');
  };

  return (
    <Layout>
      {step === 0 && (
        <Container>
          <Title text="친구의 송년 건배사에 맞건배사를" />
          <Title text="작성해주세요." />
          <Description text="건배사를 작성하고 마음을 주고받으세요." />
          <Spacer my={16} />
          <TextArea value={text} onChange={() => {}} contentEditable={false} readOnly />
          <Spacer my={32} />
          <Button title="맞건배사 작성하기" onClick={onClickNext} />
        </Container>
      )}
      {step === 1 && (
        <Container>
          <Title text="닉네임 입력" />
          <Description text="멋진 닉네임을 지정해보세요!" />
          <Spacer my={16} />
          <TextInput value={name} onChange={onChangeName} count={name.length} maxCount={8} />
          <Spacer my={32} />
          <Button title="다음" onClick={onClickNext} />
        </Container>
      )}
      {step === 2 && (
        <Container>
          <Title text="뱃지 선택" />
          <Description text="건배할 주류 뱃지를 선택해주세요." />
          <Spacer my={16} />
          <BadgeSelector value={badge} onClick={onClickBadge} />
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
      {step === 4 && (
        <Container>
          <Title text="감사합니다." />
          <Description text="다른 친구들은 나에게 어떤 건배사를 전할까? 어떤 건배 잔을 권할까" />
          <Description text="내 건배사를 작성해보고 재미로 주위 친구의 성향을 알아보세요 :)" />
          <Spacer my={16} />
          <TextBox text={text} />
          <Spacer my={64} />
          <Answer
            badge={badge as 'beer' | 'makgeolli' | 'soju' | 'whiskey' | 'wine'}
            name={name}
            content={content}
          />
          <Spacer my={32} />
          <Button title="친구 테이블 구경 가기" onClick={onClickToTable} />
          <Spacer my={16} />
          <Button title="내 건배사 작성하러 가기" onClick={onClickToHome} />
        </Container>
      )}
    </Layout>
  );
}

export default ExcheersPage;
