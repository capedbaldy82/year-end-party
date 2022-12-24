import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../libs/server/client';
import jwt from 'jsonwebtoken';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { kakao_id, name } = req.body;

  if (!process.env.SECRET_KEY) {
    return res.status(500).json({ ok: false, message: '서버 에러' });
  }

  // 존재하는 유저 확인
  const isUser = await client.user.findUnique({
    where: {
      kakaoId: kakao_id,
    },
  });

  if (!!isUser) {
    return res.status(400).json({ ok: false, message: '이미 존재하는 사용자입니다.' });
  }

  const usersOnlyUuid = await client.user.findMany({
    select: {
      uuid: true,
    },
  });

  const Uuids = usersOnlyUuid.map((obj) => obj.uuid);

  let newUuid = Math.floor(Math.random() * 1000000 + 1);

  let i = 0;
  while (Uuids.includes(newUuid)) {
    newUuid = Math.floor(Math.random() * 1000000 + 1);
    i++;
    if (i > 100) {
      break;
    }
  }

  newUuid = Math.floor(Math.random() * 1000000 + 1);

  const hashedKakaoID = jwt.sign({ kakao_id, name }, process.env.SECRET_KEY, { expiresIn: '365d' });

  try {
    const user = await client.user.create({
      data: {
        name: name,
        kakaoId: kakao_id,
        token: hashedKakaoID,
        uuid: newUuid,
      },
    });
  } catch (error) {
    return res.status(500).json({ ok: false, message: '회원가입에 실패했습니다.' });
  }

  res.json({ ok: true, name, uuid: newUuid, access_token: hashedKakaoID });
};

export default handler;
