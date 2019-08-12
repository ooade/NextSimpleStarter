import React, { createContext, useReducer } from 'react'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants'

export const TodoContext = createContext()

const TodoProvider = ({ children }) => {
	const [todos, dispatch] = useReducer((state, action) => {
		const { type, text, todo } = action
		const createRandomId = () =>
			Math.random()
				.toString(36)
				.substring(2)

		switch (type) {
			case ADD_TODO:
				return [
					...state,
					{
						id: createRandomId(),
						text,
						isCompleted: false
					}
				]
			case UPDATE_TODO:
				const todoIndex = state.findIndex(({ id }) => id === todo.id)
				return [
					...state.slice(0, todoIndex),
					{ ...todo, isCompleted: !todo.isCompleted },
					...state.slice(todoIndex + 1)
				]
			case REMOVE_TODO:
				return state.filter(t => t !== todo)
			default:
				return state
		}
	}, [])

	const addTodo = text => dispatch({ type: ADD_TODO, text })

	const removeTodo = todo => dispatch({ type: REMOVE_TODO, todo })

	const updateTodo = todo => dispatch({ type: UPDATE_TODO, todo })

	return (
		<TodoContext.Provider value={{ addTodo, removeTodo, updateTodo, todos }}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider
