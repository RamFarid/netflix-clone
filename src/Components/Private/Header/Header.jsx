import React from 'react'
import { NavLink } from 'react-router-dom'
import navLinks from '../../../data/navLinks'
import Notification from './Notification'
import Search from './Search'
import useHeaderChanges from '../../../Hooks/useHeaderChanges'
import User from './User'
import LOGO from '../../../Assets/LOGO.svg'

function Header() {
  const isTop = useHeaderChanges('Header__Browse')
  return (
    <header className={isTop()}>
      <div className='left'>
        <img src={LOGO} alt='Netflix' />
        <nav>
          {navLinks.map(({ link, text }, id) => {
            return (
              <NavLink to={link} key={id} end>
                {text}
              </NavLink>
            )
          })}
        </nav>
      </div>
      <div className='right'>
        <Search />
        {/*<Link to=''>Kids</Link>*/}
        <Notification />
        <User />
      </div>
    </header>
  )
}

export default Header
