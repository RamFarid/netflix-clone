import React from 'react'
import ContentHeader from './ContentHeader'
import TopHeader from './TopHeader'

import '../../../Styles/Landing/header.css'
function Header() {
  return (
    <header className='bb lp'>
      <div className='dark-gradiant'></div>
      <TopHeader />
      <ContentHeader />
    </header>
  )
}

export default Header
