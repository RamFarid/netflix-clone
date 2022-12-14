import React, { createContext, useState } from 'react'

export const SearchListContext = createContext()

function SearchListContextProvider({ children }) {
  const [searchItems, setSearchItems] = useState([])
  return (
    <SearchListContext.Provider value={{ searchItems, setSearchItems }}>
      {children}
    </SearchListContext.Provider>
  )
}

export default SearchListContextProvider
