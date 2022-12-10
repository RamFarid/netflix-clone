import React, { forwardRef } from 'react'
import YouTube from 'react-youtube'

const YTPlayer = forwardRef(({ videoId, onPlay, onEnd, onReady }, YTRef) => {
  return (
    <YouTube
      ref={YTRef}
      onReady={onReady}
      onPlay={onPlay}
      onEnd={onEnd}
      onError={(e) => {
        console.log(e)
      }}
      className='Video__Container'
      iframeClassName='Video'
      videoId={videoId}
      opts={{
        playerVars: {
          rel: 0,
          controls: 0,
          mute: 1,
          autoplay: 1,
        },
      }}
    />
  )
})

export default YTPlayer
