import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants'

export default dispatch => {
	const createRandomId = () =>
		Math.random()
			.toString(36)
			.substring(2)

	const addTodo = text => {
		const todo = {
			id: createRandomId(),
			text
		}
		return dispatch({ type: ADD_TODO, todo })
	}

	const removeTodo = todo => dispatch({ type: REMOVE_TODO, todo })

	const updateTodo = todo => dispatch({ type: UPDATE_TODO, todo })

	return {
		addTodo,
		removeTodo,
		updateTodo
	}
}
