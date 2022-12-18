import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../libs/server/client';
import jwt from 'jsonwebtoken';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { kakao_id, name } = req.body;

  if (!process.env.SECRET_KEY) {
    return res.status(500).json({ ok: false, message: '서버 에러' });
  }

  // 존재하는 유저 확인
  const isUser = !!(await client.user.findUnique({
    where: {
      kakaoId: kakao_id,
    },
  }));

  if (isUser) {
    return res.status(400).json({ ok: false, message: '이미 존재하는 사용자입니다.' });
  }

  // 존재하지 않는 경우 회원가입 진행
  const uuid = Math.floor(Math.random() * 1000000);

  const hasedKakaoID = jwt.sign({ kakao_id, name }, process.env.SECRET_KEY, { expiresIn: '365d' });

  const user = await client.user.create({
    data: {
      name: name,
      kakaoId: kakao_id,
      token: hasedKakaoID,
      uuid,
    },
  });

  res.json({ ok: true, name, uuid, access_token: hasedKakaoID });
};

export default handler;
