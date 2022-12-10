import React from 'react'
import { useNavigate } from 'react-router-dom'

function VideoMItem({ img, alt, videoId, requestFor }) {
  const redirectTo = useNavigate()
  const singlePageHandle = () => {
    if (requestFor === 'tv') {
      redirectTo(`/tv/${videoId}`)
      return
    }
    redirectTo(`/movie/${videoId}`)
  }
  return (
    <div className='SLider__Item' onClick={singlePageHandle}>
      <div className='bg-img-co'>
        <img src={img} alt={alt} />
      </div>
    </div>
  )
}

export default VideoMItem
