import React from 'react'
import { forwardRef } from 'react'
import { useEffect } from 'react'
import YouTube from 'react-youtube'

import '../../../Styles/Browse/pop-up-preview.css'
const PopupPreview = forwardRef((props, ref) => {
  useEffect(() => {
    // const targetPositions = sliderRef.current.getBoundingClientRect()
    // const preview = previewRef.current
    // preview.style.top = `${targetPositions.top}px`
    // preview.style.left = `${targetPositions.left}px`
    // preview.style.right = `${targetPositions.right}px`
    // preview.style.bottom = `${targetPositions.bottom}px`
    // console.log(targetPositions)
  })
  return (
    <div ref={ref} className='pop-up-info'>
      <YouTube
        onReady={() => console.log('Ready to play')}
        onPlay={() => console.log('is played')}
        className='Video__Container'
        iframeClassName='Video'
        videoId='XtMThy8QKqU'
        onError={(e) => {
          console.log(e)
        }}
        opts={{
          width: 190,
          height: 107,
          playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
          },
        }}
      />
    </div>
  )
})
export default PopupPreview
