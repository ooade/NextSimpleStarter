import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html style={{ background: '#EEE', color: '#444' }}>
        <Head>
          <link rel='stylesheet' href='https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer src='https://code.getmdl.io/1.3.0/material.min.js'></script>
        </body>
      </html>
    )
  }
}
