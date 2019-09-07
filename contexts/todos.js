import React, { createContext } from 'react'
import todoActions from '../actions/todos'
import useTodoReducers from '../reducers/todos'

const DEFAULTS = {
	todos: []
}
const TodoContext = createContext(DEFAULTS)
const TodoProvider = ({ children }) => {
	const { todos, dispatch } = useTodoReducers()

	return (
		<TodoContext.Provider value={{ ...todoActions(dispatch), todos }}>
			{children}
		</TodoContext.Provider>
	)
}

export { TodoProvider as default, TodoContext }
