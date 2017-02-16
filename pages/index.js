import 'isomorphic-fetch';
import React from 'react';
import Layout from '../components/Layout';
import Fork from '../components/Fork';
import Todo from '../components/Todo';

class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/ooade/NextSimpleStarter');
    const json = await res.json();
    return { stars: json.stargazers_count }
  }

  render() {
    const { stars } = this.props;
    return (
      <Layout>
        <Fork stars={stars} />
        <div>
          <Todo />
        </div>
      </Layout>  
    );
  }
}

export default Index;
