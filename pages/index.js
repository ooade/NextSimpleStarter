import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'
import Fork from '../components/Fork'
import Todo from '../components/Todo'
import Chart from '../components/Chart'
import Media from '../components/Media'

// Port in to using useState hooks, if you need state
const Index = ({ stars }) => (
		<Media query="(min-width: 1025px)">
			{({ matches }) => (
				<div className={`Index ${matches ? 'Index__desktop' : 'Index__mobile'}`}>
					{matches && <Fork stars={stars} />}
					<div className={matches ? 'Index__desktop__main' : 'Index__mobile__main'}>
						<h1 className={matches ? 'Index__desktop__h1' : 'Index__mobile__h1'}><span className="Index__hilite">NextJS</span> Learn how to build a PWA</h1>
						<h2 className={matches ? 'Index__desktop__h2' : 'Index__mobile__h2'}>Achieve a Perfect Lighthouse Score!</h2>
						<p className={matches ? 'Index__desktop__description' : 'Index__mobile__description'}>In this example app, you will learn how to use the latest version of NextJS 
							and leverage <a href="https://web.dev/accessibility-auditing-react" target="_blank" rel="noopener noreferrer">axe</a> to make it 100% accessible.</p>
						<div className={matches ? 'Index__desktop__content' : 'Index__mobile__content'}>
							<Todo />
							<Chart />
						</div>	
					</div>
					{!matches && <Fork stars={stars} />}
				<style jsx>
				{`
					.Index {
						display: flex;
						width: 100vw;
						margin: 0px;
						padding: 0px;
						margin-bottom: 10px;
					}

					.Index__desktop {
						flex-direction: row;
						align-items: center;
						justify-content: center;
						padding-top: 20px;
						padding-left: 20px;
					}	

					.Index__mobile {
						flex-direction: column;
						padding-top: 0px;
						padding-left: 10px;
					}

					.Index__desktop__content {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 600px;
					}

					.Index__mobile__content {
						display: flex;
						flex-direction: column;
					}
	
					.Index__hilite {
						color: rgb(63, 81, 181);
					}
	
					.Index__desktop__h1 {
						font-size: 24px;
						font-weight: 600;
						margin: 0px;
						margin-bottom: 10px;
						padding: 0px;
					}

					.Index__mobile__h1 {
						font-size: 20px;
						font-weight: 600;
						margin: 0px;
						margin-bottom: 5px;
						padding: 0px;
						margin-top: 20px;
					}
	
					.Index__desktop__h2 {
						font-size: 18px;
						line-height: 14px;
						margin: 0px;
						padding: 0px;
						margin-bottom: 20px;
					}

					.Index__mobile__h2 {
						font-size: 16px;
						line-height: 14px;
						margin: 0px;
						padding: 0px;
						margin-bottom: 20px;
					}

					.Index__desktop__description {
						width: 540px;
					}

					.Index__mobile__mobile {
						width: 90%;
					}
	
					a {
						color: rgb(63, 81, 181);
					}
				`}
				</style>
			</div>
			)}
	</Media>
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
