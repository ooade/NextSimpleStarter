import React from 'react';

export default ({ todo, remove }) => {
	return (
		<li style={{ listStyle: 'none' }}>
			<button
				className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect"
				onClick={_ => remove(todo)}
				style={{ fontSize: 12 }}
			>
				x
			</button> {' '} {todo.text}
		</li>
	);
};
