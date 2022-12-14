import React from 'react'

import '../../../Styles/Browse/pop-up-info.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Request } from '../../../APIs/apiMain'
import { isBrowser, isMobile } from 'react-device-detect'

function VideoBItem({ movie, requestFor }) {
  const redirectTo = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const handleOpenenigFilm = () => {
    if (isBrowser) {
      setSearchParams({
        ...searchParams,
        title: movie.id,
        requestFor: requestFor,
      })
    }
    if (isMobile) {
      if (requestFor === 'tv') {
        redirectTo(`/browse/tv/${movie.id}`)
        return
      }
      redirectTo(`/browse/movie/${movie.id}`)
    }
  }
  return (
    <React.Fragment>
      <div className='SLider__Item' onClick={handleOpenenigFilm}>
        <div
          className='figc-alt'
          style={Request.imgGenerator(movie) ? {} : { zIndex: '1' }}
        >
          {Request.titleGenerator(movie)}
        </div>
        <div
          className='bg-img-co'
          style={
            Request.imgGenerator(movie)
              ? { backgroundImage: `url("${Request.imgGenerator(movie)}")` }
              : {}
          }
        ></div>
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
