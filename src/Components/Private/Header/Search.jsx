import React, { useState, useRef } from 'react'
import { useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams } from 'react-router-dom'
import { SearchListContext } from '../../../Contexts/SearchListContext'

function Search() {
  const { setSearchItems } = useContext(SearchListContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchInput = useRef()
  const [focus, setFocus] = useState(true)
  const focusHandle = (e) => {
    setFocus(false)
  }
  const blurHandle = (e) => {
    if (e.target.value.length === 0) {
      setFocus(true)
    }
  }
  const changeHandle = (e) => {
    const inputValue = e.target.value
    if (inputValue.length !== 0) {
      setSearchParams({ ...searchParams, query: inputValue.trim() })
    } else {
      document.body.classList.remove("noscroll")
      setSearchItems([])
      setSearchParams({ ...searchParams })
    }
  }
  return (
    <div className={focus ? 'search-co active' : 'search-co'}>
      <AiOutlineSearch
        size={24}
        cursor='pointer'
        onClick={() => searchInput.current.focus()}
      />
      <input
        onChange={changeHandle}
        onFocus={focusHandle}
        onBlur={blurHandle}
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
