import React from 'react'
import kidsP from '../../../Assets/lp-kids.png'

import '../../../Styles/Landing/kids.css'
function Kids() {
  return (
    <section className='lp-s kids d-f'>
      <div className='lhs'>
        <img src={kidsP} alt='kids' />
      </div>
      <div className='rhs'>
        <h3 className='primary'>Create profiles for kids.</h3>
        <p className='secondary'>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
    </section>
  )
}

export default Kids
