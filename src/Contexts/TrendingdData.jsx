// Get out, It's not important

import { useState, createContext } from 'react'

export const TrendingdData = createContext()

function TrendingdDataProvider({ children }) {
  const [trendingArray, setTrendingArray] = useState([])
  return (
    <TrendingdData.Provider value={[trendingArray, setTrendingArray]}>
      {children}
    </TrendingdData.Provider>
  )
}

export default TrendingdDataProvider
