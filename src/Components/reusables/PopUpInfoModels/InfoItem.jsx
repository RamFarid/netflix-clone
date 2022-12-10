import React from 'react'

function InfoItem({ array, title, btnMore }) {
  if (array?.length === 0) return
  return (
    <div className='info'>
      <span className='mark'>{title}:</span>
      {array}
      {btnMore && (
        <a href='#more-about-amovie'>
          {' '}
          <em>more</em>
        </a>
      )}
    </div>
  )
}

export default InfoItem
