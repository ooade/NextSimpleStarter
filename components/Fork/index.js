'use client';

import React from 'react'
import Fab from '@mui/material/Fab'
import Badge from '@mui/material/Badge'
import styles from './index.module.css'



const Fork = ({ stars }) => {
	return (
		<div className={styles.fork}>
			<Badge style={{zIndex: '99999'}} badgeContent={stars || 0} max={999} color="primary">
				<Fab
					target="_blank"
					variant="extended"
					rel="noreferrer noopener"
					href="https://github.com/ooade/NextSimpleStarter"
					style={{zIndex: 1}}
				>
					<svg
						width="24"
						fill="none"
						height="24"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<title>GitHub</title>
						<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
					</svg>
				</Fab>
			</Badge>
		</div>
	)
}

export default Fork
