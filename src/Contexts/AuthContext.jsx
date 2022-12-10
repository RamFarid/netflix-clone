import { useEffect } from 'react'
import { createContext } from 'react'
import useLocalStorage from 'use-local-storage'
export const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [isLoggedInL, setIsLoggedInL] = useLocalStorage('isLoggedIn', false)
  useEffect(() => {
    if (isLoggedInL === true) {
      window.sessionStorage.setItem('isLoggedIn', true)
    }
  }, [isLoggedInL])
  return (
    <AuthContext.Provider value={{ isLoggedInL, setIsLoggedInL }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
