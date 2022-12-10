import React from 'react'
import { RiNotification3Fill } from 'react-icons/ri'
const Notification = () => {
  return (
    <React.Fragment>
      <div className='notification-co'>
        <RiNotification3Fill size={20} cursor='pointer' />
        <div id='notifications'>You haven't msgs!</div>
      </div>
    </React.Fragment>
  )
}

export default Notification
