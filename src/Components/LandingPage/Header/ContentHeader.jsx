import React from 'react'
import CreateAccountInput from '../../reusables/CreateAccountInput'
import background from '../../../Assets/lp-fs.jpg'

function ContentHeader() {
  return (
    <div className='header__main'>
      <div className='img-co'>
        <img src={background} alt='sponsored' />
        <div className='l-overlay'></div>
      </div>
      <div className='content'>
        <h2>Unlimited movies, TV shows, and more.</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <CreateAccountInput id='email' />
      </div>
    </div>
  )
}

export default ContentHeader
