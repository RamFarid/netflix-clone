import React from 'react'
import { Request } from '../../../APIs/apiMain'
import Data from './Data'

function FilmData({ data }) {
  const imgURL = Request.imgGenerator(data)
  return (
    <div
      className='film-data'
      style={
        imgURL
          ? { backgroundImage: `url(${imgURL})` }
          : {
              backgroundImage:
                'url("https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png")',
            }
      }
    >
      <Data data={data} />
    </div>
  )
}

export default FilmData
