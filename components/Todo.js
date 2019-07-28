import React, { useState } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { addTodo, removeTodo, updateTodo } from '../actions/todo'
import TodoItem from './TodoItem'

const useStyles = makeStyles(theme => ({
	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	textField: {
	  marginLeft: theme.spacing(1),
	  marginRight: theme.spacing(1),
	  width: 200,
	},
	dense: {
	  marginTop: 19,
	},
	menu: {
	  width: 200,
	},
	paper: {
		margin: 0,
		marginBottom: 20,
		width: 270,
		padding: 0,
	}
  }));

const Todo = ({ todos, addTodo, removeTodo, updateTodo }) => {
	const classes = useStyles();
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
		<>
			<Paper className={classes.paper} style={{width: 270, minHeight: 220}}>
				<form className={classes.container} onSubmit={handleAddTodo}>
					<TextField
						id="standard-name"
						label="Enter your To Do"
						className={classes.textField}
						value={text}
						onChange={handleTextChange}
						margin="normal"
					/>
				</form>

				<ul>
					{todos.map((todo, i) => (
						<TodoItem key={i} todo={todo} remove={removeTodo} update={updateTodo} />
					))}
				</ul>
				<style>{`
							form {
								background: #fff;
								padding: 10px;
							}
							ul {
								min-height: 100px;
								margin: 0;
								padding: 0;
								text-align: left;
								list-style: none;
							}
							ul li {
								padding: 10px;
								background: #FFF;
								border-bottom: 1px solid #EEE;
							}
							ul li:nth-child(2n) {
								background: #EEF6FF;
							}
							ul li:last-child {
								border-bottom: none;
							}
							.mdl-card {
								margin: auto;
								transition: all .3s;
								transform: translateY(20px);
							}
						`}
				</style>
			</Paper>
		</>
	)
}

export default connect(
	({ todos }) => ({ todos }),
	{ addTodo, removeTodo, updateTodo }
)(Todo)
