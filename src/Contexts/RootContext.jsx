import React, { useRef, createContext } from 'react'

export const RootContext = createContext()

function RootContextProvider({ children }) {
  const rootRef = useRef()
  return <RootContext.Provider value={rootRef}>{children}</RootContext.Provider>
}

export default RootContextProvider
