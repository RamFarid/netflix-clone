import React, { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const TitlePageContext = createContext()

function TitlePageContextProvider({ children }) {
  const [titlePage, setTitlePage] = useState('Netflix')
  useEffect(() => {
    document.title = titlePage
  }, [titlePage])
  return (
    <TitlePageContext.Provider value={{ setTitlePage }}>
      {children}
    </TitlePageContext.Provider>
  )
}

export default TitlePageContextProvider
