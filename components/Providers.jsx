'use client'

import React, { useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline';

import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: 'jss-insertion-point',
});

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#EEE',
		},
		primary: {
			main: '#673ab7',
		},
	},
})

const Providers = ({ children }) => {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDOM, 1000)
		}

		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>

				<CssBaseline>
					{children}
				</CssBaseline>
			</ThemeProvider>
		</StylesProvider>

		</>
	)
}

export default Providers
