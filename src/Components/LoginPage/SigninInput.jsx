import React from 'react'

function SigninInput({ password, email, handleLogin }) {
  return (
    <button className='signin' onClick={handleLogin}>
      Sign in
    </button>
  )
}

export default SigninInput
