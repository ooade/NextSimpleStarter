import React from 'react'
import ReactDom from 'react-dom'
import Head from 'next/head'
import App, { Container } from 'next/app'
import Provider from '../contexts'

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {})
			}
		}
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDom, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<Head>
					<title>Todo App</title>
				</Head>
				<Provider>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}
