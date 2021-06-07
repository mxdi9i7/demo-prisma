import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { UserAddIcon } from '@heroicons/react/outline';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;
const prisma = new PrismaClient();
const generateToken = (info: string) => jwt.sign(info, jwtSecret || '');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, user_password, email } = JSON.parse(req.body);
    try {
      const userDoc = await prisma.temple_user.findFirst({
        where: {
          OR: [{ username: username }, { email: email }],
        },
      });
      if (userDoc) {
        if (user_password == userDoc.user_password) {
          throw 'Password Incorrect';
        }
      } else {
        throw 'User Not Found';
      }
      console.log(generateToken(JSON.stringify(userDoc)));
      const token = generateToken(JSON.stringify(userDoc));

      res.json({ success: true, data: token });
    } catch (error) {
      console.log(error);
      res.json({ success: false, data: error });
    }
  } else {
    res.status(405).json({ message: 'Wrong method' });
  }
};
