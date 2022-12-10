import React from 'react'
import tv from '../../../Assets/lp-tv_frame.png'
import devicesVideo from '../../../Assets/lp-devices_video.m4v'

import '../../../Styles/Landing/devices.css'
function Devices() {
  return (
    <section className='lp-s devices d-f'>
      <div className='lhs'>
        <h3 className='primary'>Enjoy on your TV.</h3>
        <p className='secondary'>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className='rhs'>
        <div>
          <img src={tv} alt='vedio-frame' />
          <video muted loop autoPlay>
            <source src={devicesVideo} type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Devices
