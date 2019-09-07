import React, { createContext, useReducer } from 'react'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants'
import todoActions from '../actions/todo'

const DEFAULTS = {
	todos: []
}

export const TodoContext = createContext(DEFAULTS)

const TodoProvider = ({ children }) => {
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

	return (
		<TodoContext.Provider value={{ ...todoActions(dispatch), todos }}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider
