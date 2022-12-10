import React from 'react'

function Description({ isPopup, description }) {
  if (isPopup === true) return null
  return <figcaption>{description}</figcaption>
}

export default Description
