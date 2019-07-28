import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
	render() {
		return (
			<html style={{ background: '#EEE', color: '#444' }} lang="en-US">
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,minimal-ui"
					/>
					<meta name="theme-color" content="#673ab7" />
					<meta name="Description" content="an example of NextJS app with 100% accessible lighthouse score"></meta>
					<link rel="manifest" href="static/manifest.json" />
					<link rel="icon" href="static/img/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
				</body>
			</html>
		)
	}
}


MyDocument.getInitialProps = async ctx => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render
  
	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;
  
	ctx.renderPage = () =>
	  originalRenderPage({
		enhanceApp: App => props => sheets.collect(<App {...props} />),
	  });
  
	const initialProps = await Document.getInitialProps(ctx);
  
	return {
	  ...initialProps,
	  // Styles fragment is rendered after the app and page rendering finish.
	  styles: [
		<React.Fragment key="styles">
		  {initialProps.styles}
		  {sheets.getStyleElement()}
		</React.Fragment>,
	  ],
	};
  };


export default MyDocument