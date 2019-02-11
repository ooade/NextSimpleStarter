import React from 'react'

const TodoItem = ({ todo, remove }) => {
	return (
		<li style={{ listStyle: 'none' }}>
			<button
				className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect"
				onClick={() => remove(todo)}
				style={{ fontSize: 12 }}
			>
				x
			</button>{' '}
			{todo.text}
		</li>
	)
}

export default TodoItem
