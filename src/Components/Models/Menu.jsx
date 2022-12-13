import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import ram from '../../Assets/Ram.jpeg'
import { AuthContext } from '../../Contexts/AuthContext'

import '../../Styles/Browse/mobile-menu.css'
import { NavLink, useNavigate } from 'react-router-dom'
function Menu({ setMenu }) {
  const redirectTo = useNavigate()
  const auth = useContext(AuthContext)
  const handleSignOut = () => {
    document.body.classList.remove('noscroll')
    auth.setIsLoggedInL(false)
    window.sessionStorage.setItem('isLoggedIn', false)
    redirectTo('/')
  }
  const handleClosingTab = (e) => {
    if (e.target.className === e.currentTarget.className) {
      setMenu(false)
      document.body.classList.remove('noscroll')
    }
  }
  return ReactDOM.createPortal(
    <section className='menu' role='menu' onClick={handleClosingTab}>
      <div className='data'>
        <div className='profile'>
          <div className='profile-data'>
            <div className='avatar'>
              <img src={ram} alt='ram' />
            </div>
            <h3>Ram</h3>
          </div>
          <div className='profile-item'>Account</div>
          <div className='profile-item'>Help Cneter</div>
          <div className='profile-item' onClick={handleSignOut}>
            Sign Out Of Netflix
          </div>
        </div>
        <NavLink className='menu-item' to='/browse' end>
          Home
        </NavLink>
        <NavLink className='menu-item' to='/browse/tv-shows' end>
          TV Shows
        </NavLink>
        <NavLink className='menu-item' to='/browse/movies' end>
          Movies
        </NavLink>
        <NavLink className='menu-item' to='/browse/my-list' end>
          My List
        </NavLink>
      </div>
    </section>,
    document.getElementById('mobile-menu')
  )
}

export default Menu
