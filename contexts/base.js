import React, { createContext } from 'react'

export const BaseContext = createContext(null)

const BaseProvider = ({ children }) => {
	return <BaseContext.Provider value={null}>{children}</BaseContext.Provider>
}

export default BaseProvider
