import React, { createContext, useContext } from 'react'

const createContainer = (hook) => {
	const Context = createContext(null)
	// remove use from the hook name
	Context.displayName = hook.name.slice(3)

	const Provider = ({ children }) => {
		const value = hook()
		return <Context.Provider value={value}>{children}</Context.Provider>
	}

	const useContainer = () => useContext(Context)

	return { Provider, useContainer }
}

export default createContainer
