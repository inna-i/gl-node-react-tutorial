import React from 'react';
import { Head } from '@react-ssr/express';

import './index.css';

const Index = ({ pages }) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          custom-views - @react-ssr/express
        </title>
      </Head>

      <div className="root-page">
        <h1>Welcome to the app!</h1>
        <h3>It's an example of SSR using React + Express</h3>
        { pages.map(page => (<a key={page} href={`/${page}`}>{page}</a>))}

      </div>

    </React.Fragment>
  );
};

export default Index;