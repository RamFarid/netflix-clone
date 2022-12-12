import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import LOGO from '../../../Assets/LOGO.svg'
import '../../../Styles/Browse/header-mobile.css'
import Menu from '../../Models/Menu'

function MobileHeader() {
  const [menu, setMenu] = useState(false)
  return (
    <header className='Header__Mobile'>
      <GiHamburgerMenu onClick={() => setMenu((prev) => !prev)} />
      <img src={LOGO} alt='Netflix' />
      <input type='search' name='search' id='search' placeholder='Search' />
      {menu && <Menu setMenu={setMenu} />}
    </header>
  )
}

export default MobileHeader
