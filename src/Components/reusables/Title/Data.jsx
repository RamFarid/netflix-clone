import React from 'react'
import { Request } from '../../../APIs/apiMain'

function Data({ data }) {
  const title = Request.titleGenerator(data)
  const rank =
    data?.release_date?.slice(0, 4) || data?.first_air_date?.slice(0, 4)
  return (
    <div className='data'>
      <h1 className='title'>{title}</h1>
      <div className='bottom'>
        {/*<img
          src='https://cdn-icons-png.flaticon.com/512/156/156855.png'
          alt=''
        /> */}
        <span className='rank'>{rank}</span>
        <span className='rank maturity'>Not sure</span>
      </div>
    </div>
  )
}

export default Data
