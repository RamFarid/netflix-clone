import React from 'react'
import { Request } from '../../../APIs/apiMain'
import PopupMovieTime from '../PopUpInfoModels/PopupMovieTime'

function Data({ data }) {
  const title = Request.titleGenerator(data)
  const seasons = data?.seasons?.length
  const time = data?.runtime
  const rank =
    data?.release_date?.slice(0, 4) || data?.first_air_date?.slice(0, 4)
  return (
    <div className='data'>
      <h1 className='title'>{title}</h1>
      <div className='bottom'>
        <span className='rank'>{rank}</span>
        <span className='rank maturity'>Not sure</span>
        <PopupMovieTime seasons={seasons} time={time} />
      </div>
    </div>
  )
}

export default Data
