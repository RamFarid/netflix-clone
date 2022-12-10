import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import LOGO from '../../../Assets/LOGO.svg'
import '../../../Styles/Browse/header-mobile.css'

function MobileHeader() {
  return (
    <header className='Header__Mobile'>
      <GiHamburgerMenu />
      <img src={LOGO} alt='Netflix' />
      <input type='search' name='search' id='search' placeholder='Search' />
    </header>
  )
}

export default MobileHeader
