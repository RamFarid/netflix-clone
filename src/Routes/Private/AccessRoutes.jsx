import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext'
function AccessRoutes() {
  const auth = useContext(AuthContext)
  useEffect(() => {
    console.log(auth.isLoggedInL)
  }, [auth.isLoggedInL])

  return auth.isLoggedInL === true ||
    JSON.parse(window.sessionStorage.getItem('isLoggedIn')) === true ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} />
  )
}

export default AccessRoutes
