import React, { useState } from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import Genres from '../../../APIs/genres.js'

function GenreList({ isMovies }) {
  const [option, setOption] = useState('Genre')
  const [list, setList] = useState(false)
  const clickMenu = (e) => {
    setOption(e.target.textContent)
  }
  return (
    <div className='Genre' onClick={() => setList((prev) => !prev)}>
      <span className='option'>{option}</span>
      <span className='symbol'>
        <BsArrowDownShort size={20} />
      </span>
      {list && (
        <div key='cm' className='list'>
          {isMovies === true
            ? Genres.movie.map(({ name }, id) => {
                return (
                  <div className='list__item' onClick={clickMenu} key={id + 5}>
                    {name}
                  </div>
                )
              })
            : Genres.tvShows.map(({ name }, id) => {
                return (
                  <div className='list__item' onClick={clickMenu} key={id + 3}>
                    {name}
                  </div>
                )
              })}
        </div>
      )}
    </div>
  )
}

export default GenreList
