import { useState } from '@hookstate/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Example from '../components/Example';
import bcrypt from 'bcrypt';

const Home: React.FC = () => {
  const password = '100';
  const user_password = bcrypt.hashSync(password, 2);
  console.log(user_password);
  return (
    <div className='container'>
      <Head>
        <title>Landing page</title>
      </Head>
      <Example />
    </div>
  );
};

export default Home;
