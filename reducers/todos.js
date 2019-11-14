import { useReducer } from 'react'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants'

const useTodoReducers = () => {
	const [todos, dispatch] = useReducer((todos, action) => {
		const { type, todo } = action

		switch (type) {
			case ADD_TODO:
				return [
					...todos,
					{
						id: todo.id,
						text: todo.text,
						completed: false
					}
				]

			case UPDATE_TODO:
				const todoIndex = todos.findIndex(({ id }) => id === todo.id)
				return [
					...todos.slice(0, todoIndex),
					{ ...todo, completed: !todo.completed },
					...todos.slice(todoIndex + 1)
				]

			case REMOVE_TODO:
				return todos.filter(currentTodo => currentTodo !== todo)

			default:
				return todos
		}
	}, [])

	return { todos, dispatch }
}

export default useTodoReducers
