import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const password = '100';
  const user_password = bcrypt.hashSync(password, 2);
  console.log(user_password);
};
