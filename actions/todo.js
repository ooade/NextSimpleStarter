import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants/'

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function removeTodo(todo) {
	return {
		type: REMOVE_TODO,
		todo
	}
}

export function updateTodo(todo) {
	const updatedTodo = {...todo, isDone: !todo.isDone}
	return {
		type: UPDATE_TODO,
		todo: updatedTodo
	}
}
