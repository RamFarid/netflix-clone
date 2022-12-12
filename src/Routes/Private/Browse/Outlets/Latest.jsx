import React from 'react'
import { Link } from 'react-router-dom'

function Latest() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 277px)',
      }}
    >
      This Page not found
      <Link
        to={'/browse'}
        style={{
          textDecoration: 'underline',
          marginLeft: '2px',
          color: 'red',
        }}
      >
        Go to Netflix.com
      </Link>
    </div>
  )
}

export default Latest
