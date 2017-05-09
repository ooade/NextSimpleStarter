import React from 'react';
import { connect } from 'react-redux';

import { addTodo, removeTodo } from '../actions/todo';
import TodoItem from './TodoItem';

class Todo extends React.Component {
	state = {
		text: ''
	};

	addTodos = e => {
		e.preventDefault();

		this.props.addTodo(this.state.text);
		this.setState({ text: '' });
	};

	removeTodo = todo => {
		this.props.removeTodo(todo);
	};

	render() {
		return (
			<div className="mdl-card mdl-shadow--2dp">
				<form onSubmit={this.addTodos}>
					<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<input
							type="text"
							value={this.state.text}
							onInput={e => this.setState({ text: e.target.value })}
							className="mdl-textfield__input"
							id="input"
						/>
						<label className="mdl-textfield__label" htmlFor="input">
							What must be done?
						</label>
					</div>
				</form>

				<ul>
					{this.props.todos.map((todo, i) => (
						<TodoItem key={i} todo={todo} remove={this.removeTodo} />
					))}
				</ul>
				<style>{`
						form {
							background: #fff;
							padding: 10px;
						}
						ul {
							min-height: 100px;
							margin: 0;
							padding: 0;
							text-align: left;
							list-style: none;
						}
						ul li {
							padding: 10px;
							background: #FFF;
							border-bottom: 1px solid #EEE;
						}
						ul li:nth-child(2n) {
							background: #EEF6FF;
						}
						ul li:last-child {
							border-bottom: none;
						}
						.mdl-card {
							margin: auto;
							transition: all .3s;
							transform: translateY(100px);
						}
					`}</style>
			</div>
		);
	}
}

export default connect(({ todos }) => ({ todos }), { addTodo, removeTodo })(
	Todo
);
