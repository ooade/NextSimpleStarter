import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import Fork from '../components/Fork'
import Todo from '../components/Todo'
import Chart from '../components/Chart'

// Port in to using useState hooks, if you need state
const Index = ({ stars }) => (
	<div>
		<Fork stars={stars} />
		<div className="Index">
			<h1><span style={{color: "rgb(63, 81, 181)"}}>NextJS</span> Learn how to build a PWA</h1>
			<h2>Achieve a Perfect Lighthouse Score!</h2>
			<p className="Index__description">In this example app, you will learn how to use the latest version of NextJS 
				and leverage <a href="https://web.dev/accessibility-auditing-react" target="_blank" rel="noopener noreferrer">axe</a> to make it 100% accessible.</p>
			<div style={{display: "flex", flexDirection: "row"}}>
				<Todo />
				<Chart />
			</div>
		</div>
		<style>{`
				.Index {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 100%;
					margin: 0px;
					padding: 0px;
					padding-top: 20px;
					padding-left: 20px;
					margin-bottom: 10px;
				}

				h1 {
					font-size: 24px;
					margin: 0px;
					padding: 0px;
				}

				h2 {
					font-size: 18px;
					margin: 0px;
					margin-bottom: 20px;
					padding: 0px;
					line-height: 20px;
				}

				.Index__description {
					width: 540px;
				}

				a {
					color: rgb(63, 81, 181);
				}
				
			`}</style>
	</div>
)

Index.getInitialProps = async({ store }) => {
	// Adding a default/initialState can be done as follows:
	// store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
	const res = await fetch(
		'https://api.github.com/repos/ooade/NextSimpleStarter'
	)
	const json = await res.json()
	return { stars: json.stargazers_count }
}

export default connect()(Index)
