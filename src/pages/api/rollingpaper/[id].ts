import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../libs/server/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const uuid = req.query.id || 1;

    const RollingPaper = await client.user.findUnique({
      where: {
        uuid: +uuid,
      },
      select: {
        name: true,
        RollingPaper: true,
      },
    });

    if (!RollingPaper) {
      res.status(404).json({ ok: false, message: '존재하지 않는 사용자입니다.' });
    }

    const name = RollingPaper?.name;
    const content = RollingPaper?.RollingPaper?.content;

    res.json({ ok: true, name, content });
  } else {
    return res.json({ ok: false, message: '잘못된 요청입니다.' });
  }
};

export default handler;
