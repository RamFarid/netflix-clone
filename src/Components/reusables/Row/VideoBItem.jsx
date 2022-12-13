import React from 'react'

import '../../../Styles/Browse/pop-up-info.css'
import { useSearchParams } from 'react-router-dom'
import { Request } from '../../../APIs/apiMain'

function VideoBItem({ movie, requestFor }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <React.Fragment>
      <div className='SLider__Item'>
        <div
          className='bg-img-co'
          onClick={() =>
            setSearchParams({ title: movie.id, requestFor: requestFor })
          }
        >
          {
            <img
              src={Request.imgGenerator(movie)}
              alt={Request.titleGenerator(movie)}
            />
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default VideoBItem

// useEffect(() => {
//   const img = imgRef.current
//   const loadHandle = () => {
//     setLoader(false)
//   }
//   const errorHandle = () => {
//     console.log('ERROR')
//   }
//   img.addEventListener('load', loadHandle)
//   img.addEventListener('error', errorHandle)

//   return () => {
//     img.removeEventListener('load', loadHandle)
//     img.removeEventListener('error', errorHandle)
//   }
// }, [])
