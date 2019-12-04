import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Checkbox from '@material-ui/core/Checkbox'

const DeleteIcon = () => (
	<svg
		className="MuiSvgIcon-root"
		focusable="false"
		viewBox="0 0 24 24"
		aria-hidden="true"
		role="presentation"
	>
		<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
	</svg>
)

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
			<Fab
				aria-label="Delete Todo"
				onClick={() => remove(todo)}
				color="secondary"
				size="small"
			>
				<DeleteIcon />
			</Fab>
		</li>
	)
}

export default TodoItem
