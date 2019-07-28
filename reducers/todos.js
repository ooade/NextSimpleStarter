import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions'

const update = (todos, todo) => {
	const updatedTodos = todos.map(
		oldTodo => {
			if (oldTodo.id === todo.id) {
				return todo;
			} else {
				return oldTodo;
			}
		}
	)
	return updatedTodos;
}

export default function(state = [], action) {
	const { type, text, todo } = action
	switch (type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: Math.random()
						.toString(36)
						.substring(2),
					text,
					isDone: false
				}
			]
		case UPDATE_TODO:
			return update(state, todo)	
		case REMOVE_TODO:
			return state.filter(i => i !== todo)
		default:
			return state
	}
}
