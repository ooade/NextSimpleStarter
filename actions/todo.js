import { ADD_TODO, REMOVE_TODO } from './';

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	};
}

export function removeTodo(todo) {
	return {
		type: REMOVE_TODO,
		todo
	};
}
