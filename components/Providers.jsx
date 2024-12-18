'use client'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { StylesProvider } from '@mui/styles'

const theme = createTheme({
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
					<CssBaseline>{children}</CssBaseline>
				</ThemeProvider>
			</StylesProvider>
		</>
	)
}

export default Providers
