import { useReducer } from 'react'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants'

const useTodoReducers = () => {
	const [todos, dispatch] = useReducer((state, action) => {
		const { type, todo } = action

		switch (type) {
			case ADD_TODO:
				return [
					...state,
					{
						id: todo.id,
						text: todo.text,
						completed: false
					}
				]

			case UPDATE_TODO:
				const todoIndex = state.findIndex(({ id }) => id === todo.id)
				return [
					...state.slice(0, todoIndex),
					{ ...todo, completed: !todo.completed },
					...state.slice(todoIndex + 1)
				]

			case REMOVE_TODO:
				return state.filter(currentTodo => currentTodo !== todo)
			default:
				return state
		}
	}, [])

	return { todos, dispatch }
}

export default useTodoReducers
