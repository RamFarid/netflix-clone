import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function PopupSkeletonMore() {
  return (
    <div className='more'>
      <div className='left'>
        <div className='top' style={{ display: 'flex' }}>
          <Skeleton
            count={5}
            width={50}
            inline={true}
            style={{ marginLeft: '12px' }}
          />
        </div>
        <Skeleton height={50} />
      </div>
      <div className='right'>
        <Skeleton count={3} width={200} style={{ marginTop: '10px' }} />
      </div>
    </div>
  )
}

function PopupSkeletonAbout() {
  return (
    <div className='another-data' id='more-about-amovie'>
      <Skeleton count={7} />
    </div>
  )
}

export { PopupSkeletonMore, PopupSkeletonAbout }
