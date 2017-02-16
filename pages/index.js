import React from 'react';
import Head from 'next/head';

import Todo from '../components/Todo';
// Grab our HOC Provider
import { Provider } from '../utils';

class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/developit/preact');
    const json = await res.json();
    return { stars: json.stargazers_count }
  }

  render() {
    const { stars } = this.props;
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui' />
          <meta name='theme-color' content='#673ab7' />
          <link rel='manifest' href='static/manifest.json' />
          <title>Todo App</title>
          <h4>{stars || 0}</h4>
        </Head>
        <Todo />
      </div>
    );
  }
}

export default Provider(Index);
