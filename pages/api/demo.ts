import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, user_password, email } = JSON.parse(req.body);
    const userData = {
      username,
      user_password: user_password,
      email,
    };
    const savedUser = await prisma.temple_user.create({
      data: userData,
    });
    res.json({ success: true, data: savedUser });
  } else {
    res.status(405).json({ message: 'Wrong method' });
  }
};
