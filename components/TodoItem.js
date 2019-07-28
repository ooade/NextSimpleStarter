import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	button: {
	  margin: theme.spacing(1),
	  textTransform: "none"
	},
	input: {
	  display: 'none'
	},
	todo: {
		display: "flex",
		flexDirection: "row",
		listStyle: "none",
		justifyContent: "space-between",
		alignItems: "center"
	},
	li: {
		listStyle: "none"
	}
  }));

const TodoItem = ({ todo, remove, update }) => {
	const classes = useStyles();

	return (
		<li className={classes.li}>
			<div className={classes.todo}>
				<Button 
					variant="contained"
					onClick={() => remove(todo)}
					color="primary"
					className={classes.button}>
					X
				</Button>
				{todo.text}
				<Button 
					variant="contained"
					onClick={() => update(todo)}
					color={todo.isDone ? "secondary" : "primary"}
					className={classes.button}>
					{todo.isDone ? "Undo" : "Done!"}
				</Button>
			</div>
		</li>
	)
}

export default TodoItem
