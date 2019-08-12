import React from 'react'
import TodoProvider from './todo'

const Provider = props => <TodoProvider {...props} />

/**
 * If you'd need to have multiple provider, you can do it this way!
 */
// const MultiplProvider = props => (
// 	<TodoProvider>
// 		<AnotherProvider {...props} />
// 	</TodoProvider>
// )

export default Provider
