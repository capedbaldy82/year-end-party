import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../libs/server/client';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  kakao_id: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const { content } = req.body;

    if (!process.env.SECRET_KEY) {
      return res.status(500).json({ ok: false, message: '서버 에러' });
    }

    // 롤링페이퍼 여부 확인
    const encryptToken = jwt.verify(token, process.env.SECRET_KEY) as JwtPayload;

    // 롤링페이퍼 여부 확인
    const rollingPaper = await client.user.findUnique({
      where: {
        kakaoId: encryptToken.kakao_id,
      },
      select: {
        id: true,
        RollingPaper: {
          select: {
            id: true,
          },
        },
      },
    });

    const userId = rollingPaper?.id;
    const rollingPaperId = rollingPaper?.RollingPaper?.id;

    if (!userId || !content) {
      return res.status(400).json({ ok: false, message: '올바르지 않은 요청입니다.' });
    }

    // 롤링페이퍼 없을 경우
    if (!rollingPaperId) {
      const newRollingPaper = await client.rollingPaper.create({
        data: {
          userId: +userId,
          content,
        },
      });

      return res.status(200).json({ ok: true, content });
    }

    console.log(rollingPaperId);

    // 롤링페이퍼 있을 경우
    const updatedRollingPaper = await client.rollingPaper.update({
      where: {
        id: rollingPaperId,
      },
      data: {
        content,
      },
    });

    res.status(200).json({ ok: true, content });
  }
};

export default handler;
