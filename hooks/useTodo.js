import { useState } from 'react'
import createContainer from '.'

const useTodo = () => {
	const initialState = [
		{
			id: 1,
			text: 'A simple initial todo',
			completed: false,
		},
	]

	const [todos, setTodos] = useState(initialState)

	const createRandomId = () => Math.random().toString(36).substring(2)

	const addTodo = (text) => {
		const todo = {
			id: createRandomId(),
			text,
			completed: false,
		}
		setTodos([...todos, todo])
	}

	const removeTodo = (todo) => {
		const filteredTodos = todos.filter((v) => v !== todo)
		setTodos(filteredTodos)
	}

	const updateTodo = (todo) => {
		const updatedTodos = todos.map((v) => (v.id === todo.id ? todo : v))
		setTodos(updatedTodos)
	}

	return { todos, addTodo, removeTodo, updateTodo }
}

export const Todo = createContainer(useTodo)
