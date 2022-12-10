import React from 'react'
import LangInput from '../../reusables/LangInput'
import LOGO from '../../../Assets/LOGO.svg'

import { Link } from 'react-router-dom'
function TopHeader() {
  return (
    <div className='header__top'>
      <img src={LOGO} alt='Netflix' />
      <LangInput />
      <Link to='/login' className='signin'>
        Sign in
      </Link>
    </div>
  )
}

export default TopHeader
