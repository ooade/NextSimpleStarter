'use client';

import React from 'react'
import Fab from '@mui/material/Fab'
import Checkbox from '@mui/material/Checkbox'
import styles from './index.module.css'

const DeleteIcon = () => (
	<svg
		className="MuiSvgIcon-root"
		focusable="false"
		viewBox="0 0 24 24"
		aria-hidden="true"
		role="presentation"
		width={24}
		height={24}
		fill='currentColor'
	>
		<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
	</svg>
)



const TodoItem = ({ todo, updateTodo, removeTodo }) => {

	return (
		<li className={styles.todoItem}>
			<label
				className={
					todo.completed
						? `${styles.textWithStrike} ${styles.text}`
						: styles.text
				}
			>
				<Checkbox
					checked={todo.completed}
					onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
					color="primary"
				/>
				{todo.text}
			</label>
			<Fab
				aria-label="Delete Todo"
				onClick={() => removeTodo(todo)}
				color="error"
				size="small"
			>
				<DeleteIcon />
			</Fab>
		</li>
	)
}

export default TodoItem
