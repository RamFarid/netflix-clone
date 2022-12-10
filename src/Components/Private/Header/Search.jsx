import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
function Search() {
  const searchInput = useRef()
  const [focus, setFocus] = useState(true)
  useEffect(() => {
    const searchInputValue = searchInput.current
    const focusHandle = () => {
      // console.log('Focused')
      setFocus(false)
    }
    const blurHandle = () => {
      // console.log('Blured')
      searchInputValue.value = ''
      setFocus(true)
    }
    searchInputValue.addEventListener('focus', focusHandle)
    searchInputValue.addEventListener('blur', blurHandle)

    return () => {
      searchInputValue.removeEventListener('focus', focusHandle)
      searchInputValue.removeEventListener('blur', blurHandle)
    }
  })
  return (
    <div className={focus ? 'search-co active' : 'search-co'}>
      <AiOutlineSearch
        size={24}
        cursor='pointer'
        onClick={() => searchInput.current.focus()}
      />
      <input
        ref={searchInput}
        type='search'
        name='search'
        id='search'
        placeholder='Titles, people, Generes'
      />
    </div>
  )
}

export default Search
