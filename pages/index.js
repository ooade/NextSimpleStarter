import React from 'react';
import Head from 'next/head';

import Todo from '../components/Todo';
// Grab our HOC Provider
import { Provider } from '../utils';

const Index = () => (
    <div>
      <Head>
        <title>Todo App</title>
      </Head>
      <Todo />
    </div>
);

export default Provider(Index);
