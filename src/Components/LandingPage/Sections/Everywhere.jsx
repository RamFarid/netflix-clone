import React from 'react'
import frame from '../../../Assets/lp-devices_display.png'
import video from '../../../Assets/lp-everywhere.m4v'

import '../../../Styles/Landing/everywhere.css'
function Everywhere() {
  return (
    <section className='lp-s everywhere d-f'>
      <div className='lhs'>
        <h3 className='primary'>Watch everywhere.</h3>
        <p className='secondary'>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </div>
      <div className='rhs'>
        <img src={frame} alt='video-frame' />
        <div>
          <video muted autoPlay loop width='293'>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Everywhere
