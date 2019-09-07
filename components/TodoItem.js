import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles(theme => ({
	todoItem: {
		display: 'flex',
		padding: theme.spacing(1),
		borderTop: '2px dotted #EEF6FF',
		'&:nth-child(even)': {
			background: '#EEF6FF'
		}
	},
	text: {
		flex: 1,
		display: 'flex',
		alignItems: 'center'
	},
	textWithStrike: {
		textDecoration: 'line-through'
	}
}))

const TodoItem = ({ todo, remove, update }) => {
	const classes = useStyles()
	const isTodoCompleted = todo.completed

	return (
		<li className={classes.todoItem}>
			<Checkbox
				checked={isTodoCompleted}
				onChange={() => update(todo)}
				color="primary"
			/>
			<span
				className={
					isTodoCompleted
						? `${classes.textWithStrike} ${classes.text}`
						: classes.text
				}
			>
				{todo.text}
			</span>
			<Fab onClick={() => remove(todo)} color="secondary" size="small">
				<DeleteIcon />
			</Fab>
		</li>
	)
}

export default TodoItem
