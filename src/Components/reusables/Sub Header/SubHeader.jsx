import React from 'react'
import ClassificationWith from './ClassificationWith'
import GenreList from './GenreList'
import useHeaderChanges from '../../../Hooks/useHeaderChanges'

import '../../../Styles/Browse/sub-header.css'
function SubHeader({ genre, isMovies }) {
  const isTop = useHeaderChanges('Sub__Header')
  return (
    <div className={isTop()}>
      <span className='genre-title'>{genre}</span>
      <GenreList isMovies={isMovies} />
      <ClassificationWith />
    </div>
  )
}

export default SubHeader
