import React from 'react'

function BackgroundImg({ background, imgURL, alt }) {
  return (
    <img
      src={
        imgURL ||
        'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
      }
      alt={alt}
      style={background()}
    />
  )
}

export default BackgroundImg
