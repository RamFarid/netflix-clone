import React from 'react'

function PopupDescription({ description }) {
  if (description?.length === 0 || !description)
    return (
      <div style={{ color: 'red' }} className='bottom-description'>
        No description or overview for this work, that's because this is an a
        free API, it would not in DATA that come from it, or ERROR while
        fetching data
      </div>
    )
  return <div className='bottom-description'>{description}</div>
}

export default PopupDescription
