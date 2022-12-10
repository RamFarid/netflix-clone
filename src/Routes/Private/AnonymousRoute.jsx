import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext'

function AnonymousRoute() {
  const auth = useContext(AuthContext)
  return auth.isLoggedInL === true ||
    JSON.parse(window.sessionStorage.getItem('isLoggedIn')) ? (
    <Navigate to={'/browse'} />
  ) : (
    <Outlet />
  )
}

export default AnonymousRoute
