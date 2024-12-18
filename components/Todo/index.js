'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import TodoItem from '../TodoItem'
import styles from './index.module.css'
import { useTodo } from '../../hooks/useTodo'

const Todo = () => {
	const [text, setText] = useState('')
	const { todos, addTodo, updateTodo, removeTodo, completedTodos } = useTodo()

	const handleAddTodo = (e) => {
		e.preventDefault()
		const trimmedText = text.trim()

		trimmedText && addTodo(trimmedText)
		setText('')
	}

	const handleTextChange = (e) => {
		setText(e.target.value)
	}

	return (
		<Grid container className={styles.todo} justify="center" direction="column">
			<header>
				<Image
					className={styles.logo}
					src="/static/img/splashscreen-icon-384x384.png"
					alt=""
					width="192"
					height="192"
					priority={true}
				/>
				<h1 className={styles.srOnly}> Todo App </h1>
			</header>
			<Paper className={styles.paper} elevation={3}>
				<form onSubmit={handleAddTodo} className={styles.form}>
					<TextField
						fullWidth
						value={text}
						margin="normal"
						label="What must be done?"
						onChange={handleTextChange}
						inputProps={{ 'aria-label': 'What must be done?' }}
					/>
					<button className={styles.srOnly}> Submit Todo </button>
					{!!todos.length && (
						<Grid container justifyContent={'space-between'}>
							<Grid item>Total: {todos.length}</Grid>
							<Grid item>Completed: {completedTodos.length}</Grid>
						</Grid>
					)}
				</form>
				<ul className={styles.list}>
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							updateTodo={updateTodo}
							removeTodo={removeTodo}
						/>
					))}
				</ul>
			</Paper>
		</Grid>
	)
}

export default Todo
