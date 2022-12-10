import React from 'react'
import { Request } from '../../../APIs/apiMain'
import Data from './Data'

function FilmData({ data }) {
  const imgURL = Request.imgGenerator(data)
  return (
    <div className='film-data' style={{ backgroundImage: `url(${imgURL})` }}>
      <Data data={data} />
    </div>
  )
}

export default FilmData
