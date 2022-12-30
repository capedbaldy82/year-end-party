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
    const id = req.query.id || 1;

    if (!process.env.SECRET_KEY) {
      return res.status(500).json({ ok: false, message: '서버 에러' });
    }

    try {
      const posts = await client.user.findUnique({
        where: {
          uuid: +id,
        },
        select: {
          RollingPaper: {
            select: {
              posts: true,
            },
          },
        },
      });

      const filteredPosts = posts?.RollingPaper?.posts.map((post) => ({
        id: post.id,
        badge: post.badge,
      }));

      return res.status(200).json({ ok: true, posts: filteredPosts });
    } catch {
      return res.status(400).json({ ok: false, message: '존재하지 않는 유저입니다.' });
    }
  } else {
    return res.status(400).json({ Ok: false, message: '잘못된 API 요청입니다.' });
  }
};

export default handler;
