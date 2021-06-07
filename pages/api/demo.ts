import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = '111';
    res.json({ success: true, data: data });
  } else {
    res.status(405).json({ message: 'Wrong method' });
  }
};
