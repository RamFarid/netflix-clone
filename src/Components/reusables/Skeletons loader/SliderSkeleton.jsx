import React from 'react'
import Skeleton from 'react-loading-skeleton'

function SliderSkeleton() {
  return (
    <React.Fragment>
      <Skeleton
        count={10}
        style={{
          borderRadius: '4px',
          height: '90px',
          width: '150px',
          marginRight: '5px',
          aspectRatio: '16/9',
        }}
        baseColor={'black'}
        highlightColor='#141414'
        inline
      />
    </React.Fragment>
  )
}

export { SliderSkeleton }
