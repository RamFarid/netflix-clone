import React from 'react'
import mobile from '../../../Assets/lp-mobile.jpg'
import boxshot from '../../../Assets/lp-boxshot.png'
import downloadP from '../../../Assets/lp-download.gif'

import '../../../Styles/Landing/download.css'
function Download() {
  return (
    <section className='lp-s download d-f'>
      <div className='lhs'>
        <div className='co'>
          <img src={mobile} alt='Mobile' />
          <div className='downlad-animation'>
            <img src={boxshot} alt='boxshot' />
            <div className='text'>
              <span>Stranger Things</span>
              <p>Downloading...</p>
            </div>
            <img src={downloadP} alt='Animation' />
          </div>
        </div>
      </div>
      <div className='rhs'>
        <h3 className='primary'>Download your shows to watch offline.</h3>
        <p className='secondary'>
          Save your favorites easily and always have something to watch.
        </p>
      </div>
    </section>
  )
}

export default Download
