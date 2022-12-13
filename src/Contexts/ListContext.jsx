import { createContext, useState } from 'react'

export const ListContext = createContext()

function ListContextProvider({ children }) {
  const [list, setList] = useState([])
  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  )
}

export default ListContextProvider
