import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	button: {
	  margin: theme.spacing(1),
	},
	input: {
	  display: 'none',
	},
  }));

const TodoItem = ({ todo, remove, update }) => {
	const classes = useStyles();

	return (
		<li style={{ listStyle: 'none' }}>
			<Button 
				variant="contained"
				onClick={() => update(todo)}
				color={todo.isDone ? "secondary" : "primary"}
				className={classes.button}>
				{todo.isDone ? "Completed" : "Check off"}
      		</Button>
			{todo.text}
		</li>
	)
}

export default TodoItem
