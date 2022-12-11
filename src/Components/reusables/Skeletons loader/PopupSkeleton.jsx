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
      <Skeleton height={40} />
      <Skeleton count={7} />
    </div>
  )
}

function MoreLikeThisSkeleton() {
  return (
    <div className='more-like-this__container'>
      <div className='overlay2'></div>
      <MoreLikeThisItem />
      <MoreLikeThisItem />
      <MoreLikeThisItem />
      <MoreLikeThisItem />
      <MoreLikeThisItem />
      <MoreLikeThisItem />
      <MoreLikeThisItem />
      <MoreLikeThisItem />
      <MoreLikeThisItem />
    </div>
  )
}

function MoreLikeThisItem() {
  return (
    <div className='more-like-this__item'>
      <div className='img-co'>
        <Skeleton />
      </div>
      <div className='info'>
        <div className='top'>
          <div className='left'>
            <Skeleton width={80} />
            <Skeleton width={40} />
          </div>
          <div className='right'>
            <Skeleton circle={true} width={40} height={40} />
          </div>
        </div>
        <div className='description' style={{ marginBottom: '100px' }}>
          <Skeleton height={10} count={7} />
        </div>
      </div>
    </div>
  )
}

export { PopupSkeletonMore, PopupSkeletonAbout, MoreLikeThisSkeleton }
