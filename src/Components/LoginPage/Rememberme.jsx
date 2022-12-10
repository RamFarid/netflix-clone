import React from 'react'

function Rememberme({ setIsChecked }) {
  return (
    <span className='remember-me-co'>
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        type='checkbox'
        name='isRemember'
        id='box'
      />
      <label htmlFor='box'>Remember me</label>
    </span>
  )
}

export default Rememberme
