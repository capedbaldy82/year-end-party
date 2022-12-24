import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../libs/server/client';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  name: string;
  kakao_id: string | number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // 방명록 조회
    const token = req.headers.authorization?.split(' ')[1] || '';

    if (!process.env.SECRET_KEY) {
      return res.status(500).json({ ok: false, message: '서버 에러' });
    }

    try {
      const encryptToken = jwt.verify(token, process.env.SECRET_KEY) as JwtPayload;
      const name = encryptToken.name;
      const kakao_id = encryptToken.kakao_id;

      const posts = await client.user.findUnique({
        where: {
          kakaoId: +kakao_id,
        },
        select: {
          RollingPaper: {
            select: {
              posts: true,
            },
          },
        },
      });

      return res.status(200).json({ ok: true, posts: posts?.RollingPaper?.posts });
    } catch {
      return res.status(401).json({ ok: false, message: '유효하지 않은 토큰입니다.' });
    }
  }

  if (req.method === 'POST') {
    // 방명록 작성
    const { to, name, badge, content } = req.body;

    if (!to || !name || !badge || !content) {
      return res.status(400).json({ ok: false, message: '잘못된 요청입니다.' });
    }

    try {
      const rollingPaper = await client.user.findUnique({
        where: {
          uuid: +to,
        },
        select: {
          RollingPaper: {
            select: {
              id: true,
            },
          },
        },
      });

      const rollingPaperId = rollingPaper?.RollingPaper?.id;

      if (!rollingPaperId) {
        return res.json({ ok: false, message: '롤링페이퍼가 존재하지 않습니다.' });
      }

      const post = await client.post.create({
        data: {
          name: name + '',
          badge: badge + '',
          content: content + '',
          rollingPaperId: rollingPaperId,
        },
      });

      return res.json({
        ok: true,
        post: { name: post.name, badge: post.badge, content: post.content },
      });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  }
};

export default handler;
