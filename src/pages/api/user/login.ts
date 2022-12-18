import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../libs/server/client';
import jwt from 'jsonwebtoken';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { kakao_id, name } = req.body;

  if (!process.env.SECRET_KEY) {
    return res.status(500).json({ ok: false, message: '서버 에러' });
  }

  const isUser = await client.user.findUnique({
    where: {
      kakaoId: kakao_id,
    },
  });

  if (isUser?.name !== name) {
    res.status(200).json({ ok: false, message: '잘못된 요청입니다.' });
  }

  const token = jwt.sign({ kakao_id, name }, process.env.SECRET_KEY, { expiresIn: '365d' });

  const user = await client.user.update({
    where: {
      kakaoId: kakao_id,
    },
    data: {
      token: token,
    },
  });

  res.json({ ok: true, access_token: token, uuid: user.uuid });
};

export default handler;
