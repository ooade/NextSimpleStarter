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

const useStyles = makeStyles((theme) => ({
	todoItem: {
		display: 'flex',
		padding: theme.spacing(1),
		opacity: 0,
		animationName: '$slideDown',
		animationDuration: '300ms',
		animationFillMode: 'forwards',
		animationDelay: '0s',
		animationTimingFunction: 'cubic-bezier(0.1, 0.23, 0.23, 1.44)',
		'&:nth-child(even)': {
			background: '#EEF6FF',
		},
	},
	'@keyframes slideDown': {
		from: {
			opacity: 0,
			transform: 'translateY(-10px)',
		},
		to: {
			opacity: 1,
			transform: 'translateY(0px)',
		},
	},
	text: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
	},
	textWithStrike: {
		textDecoration: 'line-through',
	},
}))

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
	const classes = useStyles()

	return (
		<li className={classes.todoItem}>
			<label
				className={
					todo.completed
						? `${classes.textWithStrike} ${classes.text}`
						: classes.text
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
				color="secondary"
				size="small"
			>
				<DeleteIcon />
			</Fab>
		</li>
	)
}

export default TodoItem
