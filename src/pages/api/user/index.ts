import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../libs/server/client';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  kakao_id: Number | String;
  [key: string]: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const access_token = req.headers.authorization?.split(' ')[1] || '';

      if (!process.env.SECRET_KEY) {
        return res.status(500).json({ ok: false, message: '서버 에러' });
      }

      const encryptToken = jwt.verify(access_token, process.env.SECRET_KEY) as JwtPayload;

      const user = await client.user.findUnique({
        where: {
          kakaoId: +encryptToken.kakao_id,
        },
      });

      const name = user?.name;
      const uuid = user?.uuid;

      res.json({ ok: true, name, uuid });
    } catch (error) {
      return res.json({ ok: false, message: '올바르지 않은 토큰입니다.' });
    }
  }

  res.json({ ok: false, message: '올바르지 않은 요청입니다.' });
};

export default handler;
