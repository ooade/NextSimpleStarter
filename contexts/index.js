import React from 'react'
import TodoProvider from './todos'
import BaseProvider from './base'

const Provider = ({ children }) => (
	<TodoProvider>
		<BaseProvider children={children} />
	</TodoProvider>
)

export default Provider
