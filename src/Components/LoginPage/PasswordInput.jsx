import React, { useState } from 'react'

function PasswordInput({ setPassword }) {
  const [validation, setValidation] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
  function passwordValidation(e) {
    let value = e.target.value
    if (value.length < 4) {
      setValidation(true)
    } else {
      setValidation(false)
    }
    setPassword(value)
  }
  return (
    <React.Fragment>
      <div className='input-co'>
        <input
          type={showPassword ? 'password' : 'text'}
          id='password'
          placeholder=' '
          onChange={passwordValidation}
          style={validation ? { borderBottom: '#e87c03 solid 1px' } : {}}
        />
        <label htmlFor='password'>Password</label>
        <div
          onClick={() => setShowPassword((pre) => !pre)}
          className='password-showing'
        >
          {showPassword ? 'SHOW' : 'HIDE'}
        </div>
      </div>
      {validation && (
        <div className='text-validation'>
          Your password must contain between 4 and 60 characters.
        </div>
      )}
    </React.Fragment>
  )
}

export default PasswordInput
