import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../libs/server/client';
import jwt from 'jsonwebtoken';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { kakao_id, name } = req.body;

    // jwt 시크릿키 유무 확인
    if (!process.env.SECRET_KEY) {
      return res.status(500).json({ ok: false, message: '서버 에러' });
    }

    // kakao_id를 통해 유저 확인
    const isUser = await client.user.findUnique({
      where: {
        kakaoId: kakao_id,
      },
    });

    // 존재하는 유저인데 name값이 다를 경우 => 악용 방지를 위한 방어 로직
    if (isUser && isUser.name !== name) {
      res.status(200).json({ ok: false, message: '잘못된 이름입니다.' });
    }

    // 존재하는 유저일 경우 토큰 및 uuid 리턴(uuid는 개인페이지 라우팅 위함)
    if (isUser) {
      return res.status(200).json({ ok: true, access_token: isUser.token, uuid: isUser.uuid });
    }

    // 존재하지 않는 유저일 경우 토큰 생성
    const token = jwt.sign({ kakao_id, name }, process.env.SECRET_KEY, { expiresIn: '365d' });

    // 중복되지 않는 uuid생성을 위해 불러오기
    const usersOnlyUuid = await client.user.findMany({
      select: {
        uuid: true,
      },
    });

    // 데이터 가공
    const Uuids = usersOnlyUuid.map((obj) => obj.uuid);

    // uuid 생성, 만약 있을 경우 계속 새롭게 생성
    let newUuid = Math.floor(Math.random() * 1000000 + 1);

    while (Uuids.includes(newUuid)) {
      newUuid = Math.floor(Math.random() * 1000000 + 1);
    }

    // user 생성
    const user = await client.user.create({
      data: {
        name,
        kakaoId: kakao_id,
        token,
        uuid: newUuid,
      },
    });

    return res.json({ ok: true, access_token: token, uuid: user.uuid });
  } else {
    return res.json({ ok: false, message: '잘못된 API 요청입니다.' });
  }
};

export default handler;
