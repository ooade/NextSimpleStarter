import React, { useState } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { addTodo, removeTodo, updateTodo } from '../actions/todo'
import TodoItem from './TodoItem'

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		borderBottom: '1px dashed #3f51b5',
		justifyContent: 'center'
	},
	button: {
		margin: theme.spacing(1),
		textTransform: 'none'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	},
	dense: {
		marginTop: 19
	},
	menu: {
		width: 200
	},
	paper: {
		desktop: {
			margin: 0,
			marginBottom: 20,
			width: 360,
			padding: 0,
			minHeight: 210
		},
		mobile: {
			margin: 0,
			marginBottom: 20,
			width: 360,
			padding: 0,
			minHeight: 220
		}
	}
}))

const Todo = ({ todos, addTodo, removeTodo, updateTodo, matches }) => {
	const classes = useStyles()
	const [text, changeText] = useState('')

	const handleAddTodo = e => {
		e.preventDefault()

		addTodo(text)
		changeText('')
	}

	const handleTextChange = e => {
		changeText(e.target.value)
	}

	return (
		<div className={`Todo ${matches ? 'Todo__desktop' : 'Todo__mobile'}`}>
			<Paper className={matches ? classes.paper.desktop : classes.paper.mobile}>
				<form className={classes.container} onSubmit={handleAddTodo}>
					<TextField
						id="standard-name"
						label="What must be done?"
						className={classes.textField}
						value={text}
						onChange={handleTextChange}
						margin="normal"
					/>
					<Button
						variant="outlined"
						onClick={handleAddTodo}
						color={'primary'}
						className={classes.button}
					>
						Add
					</Button>
				</form>
				<ul
					className={`Todo__list ${
						matches ? 'Todo__list__desktop' : 'Todo__list__mobile'
					}`}
				>
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
			<style>
				{`
					.Todo {
						margin-bottom: 20px;
					}

					.Todo__desktop {
						width: 360px;
						min-height: 210px;
					}

					.Todo__mobile {
						width: 95vw;
					}
					
					form {
						background: #fff;
						padding: 10px;
					}

					.Todo__list {
						min-height: 120px;
						margin: 0;
						padding: 0;
						text-align: left;
						list-style: none;
					}

					.Todo__list li {
						padding: 10px;
						background: #FFF;
						border-bottom: 1px solid #EEE;
					}
					
					.Todo__list li:nth-child(2n) {
						background: #EEF6FF;
					}

					.Todo__list li:last-child {
						border-bottom: none;
					}
					.mdl-card {
						margin: auto;
						transition: all .3s;
						transform: translateY(20px);
					}
					`}
			</style>
		</div>
	)
}

export default connect(
	({ todos }) => ({ todos }),
	{ addTodo, removeTodo, updateTodo }
)(Todo)
