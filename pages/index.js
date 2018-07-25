import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import Fork from '../components/Fork'
import Todo from '../components/Todo'

class Index extends React.Component {
	static async getInitialProps({ store }) {
		// Adding a default/initialState can be done as follows:
		// store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
		const res = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		)
		const json = await res.json()
		return { stars: json.stargazers_count }
	}

	render() {
		const { stars } = this.props
		return (
			<div>
				<Fork stars={stars} />
				<div>
					<Todo />
				</div>
			</div>
		)
	}
}

export default connect()(Index)
