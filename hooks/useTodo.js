import { useReducer } from 'react'
import createContainer from '.'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants'

const useTodoActions = (dispatch) => {
	const createRandomId = () => Math.random().toString(36).substring(2)

	const addTodo = (text) => {
		const todo = {
			id: createRandomId(),
			text,
		}
		return dispatch({ type: ADD_TODO, todo })
	}

	const removeTodo = (todo) => dispatch({ type: REMOVE_TODO, todo })

	const updateTodo = (todo) => dispatch({ type: UPDATE_TODO, todo })

	return { addTodo, removeTodo, updateTodo }
}

const useTodo = () => {
	const initialState = []

	const [todos, dispatch] = useReducer((todos, action) => {
		const { type, todo } = action

		switch (type) {
			case ADD_TODO:
				return [
					...todos,
					{
						id: todo.id,
						text: todo.text,
						completed: false,
					},
				]

			case UPDATE_TODO:
				const todoIndex = todos.findIndex(({ id }) => id === todo.id)
				return [
					...todos.slice(0, todoIndex),
					{ ...todo, completed: !todo.completed },
					...todos.slice(todoIndex + 1),
				]

			case REMOVE_TODO:
				return todos.filter((currentTodo) => currentTodo !== todo)

			default:
				return todos
		}
	}, initialState)

	const actions = useTodoActions(dispatch)

	return { todos, ...actions }
}

export const Todo = createContainer(useTodo)
