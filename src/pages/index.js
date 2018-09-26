import React from 'react';
import Layout from '../components/layout';
const page = require('../index.md');

const IndexPage = () => (
  <Layout>
    <div dangerouslySetInnerHTML={{__html: page}} />
  </Layout>
)

export default IndexPage
