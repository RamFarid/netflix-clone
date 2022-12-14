import React, { useState } from 'react'
import { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSearchParams } from 'react-router-dom'
import LOGO from '../../../Assets/LOGO.svg'
import { SearchListContext } from '../../../Contexts/SearchListContext'
import '../../../Styles/Browse/header-mobile.css'
import Menu from '../../Models/Menu'

function MobileHeader() {
  const { setSearchItems } = useContext(SearchListContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [menu, setMenu] = useState(false)
  const onClick = () => {
    document.body.classList.toggle('noscroll')
    setMenu((prev) => !prev)
  }
  const changeHandle = (e) => {
    const inputValue = e.target.value
    if (inputValue.length !== 0 && e.key.toLowerCase() === 'enter') {
      setSearchParams({ ...searchParams, query: inputValue.trim() })
    } else {
      setSearchItems([])
      setSearchParams({ ...searchParams })
    }
  }
  return (
    <header className='Header__Mobile'>
      <GiHamburgerMenu onClick={onClick} />
      <img src={LOGO} alt='Netflix' />
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Search'
        onKeyDown={changeHandle}
      />
      {menu && <Menu setMenu={setMenu} />}
    </header>
  )
}

export default MobileHeader
