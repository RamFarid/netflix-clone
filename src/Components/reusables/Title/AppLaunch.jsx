import React from 'react'
import { RiExternalLinkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { isIOS, isAndroid } from 'react-device-detect'

function AppLaunch() {
  const appType = () => {
    if (isIOS === true) {
      window.open('https://apps.apple.com/app/netflix/id363590051', '_blank')
      return
    }
    if (isAndroid === true) {
      window.open(
        'https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=en_US&gl=US&pli=1',
        '_blank'
      )
      return
    }
    window.open(
      'https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=en_US&gl=US&pli=1'
    )
  }
  return (
    <div className='app-launch'>
      <div className='sponsore'>Watch Netflix on your phone or tablet</div>
      <button onClick={appType}>Get the free app</button>
      <Link className='website' to='/browse'>
        <RiExternalLinkFill size={30} />
        Go to Netflix.com
      </Link>
    </div>
  )
}

export default AppLaunch
