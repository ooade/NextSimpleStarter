import React, { useState, useContext } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { TodoContext } from '../contexts/todo'
import TodoItem from './TodoItem'

const useStyles = makeStyles(theme => ({
	todo: {
		maxWidth: 400,
		margin: 'auto',
		marginTop: 40,
		textAlign: 'center'
	},
	form: {
		padding: theme.spacing(2)
	},
	list: {
		listStyle: 'none',
		padding: 0
	}
}))

const Todo = () => {
	const classes = useStyles()
	const [text, setText] = useState('')
	const { addTodo, removeTodo, updateTodo, todos } = useContext(TodoContext)
	const completedTodos = todos.filter(todo => todo.isCompleted)

	const handleAddTodo = e => {
		e.preventDefault()

		addTodo(text)
		setText('')
	}

	const handleTextChange = e => {
		setText(e.target.value)
	}

	return (
		<Grid
			container
			className={classes.todo}
			justify="center"
			direction="column"
		>
			<header>
				<img src="/static/img/android-chrome-192x192.png" alt="Logo" />
			</header>
			<Paper component="main">
				<form onSubmit={handleAddTodo} className={classes.form}>
					<TextField
						fullWidth
						value={text}
						margin="normal"
						label="What must be done?"
						onChange={handleTextChange}
						inputProps={{ 'aria-label': 'What must be done?' }}
					/>
					{!!todos.length && (
						<Grid container justify="space-between">
							<Grid item>Total: {todos.length}</Grid>
							<Grid item>Completed: {completedTodos.length}</Grid>
						</Grid>
					)}
				</form>
				<ul className={classes.list}>
					{todos.map((todo, i) => (
						<TodoItem
							key={i}
							todo={todo}
							remove={removeTodo}
							update={updateTodo}
						/>
					))}
				</ul>
			</Paper>
		</Grid>
	)
}

export default Todo
