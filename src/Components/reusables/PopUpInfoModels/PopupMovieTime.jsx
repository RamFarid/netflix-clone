import React from 'react'

function PopupMovieTime({ time, seasons }) {
  if (time) return <span className='movie-info m-r-10px'>{time} Minutes</span>
  if (seasons)
    return <span className='movie-info m-r-10px'>{seasons} Seasons</span>
  return
}

export default PopupMovieTime
