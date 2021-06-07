import { useState } from '@hookstate/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <Head>
        <title>Landing page</title>
      </Head>
    </div>
  );
};

export default Home;
