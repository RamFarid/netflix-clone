import React, { useState } from 'react'

function EmailInput({ setEmail }) {
  const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
  const [validation, setValidation] = useState(false)
  function emailValidation(e) {
    let value = e.target.value
    if (!reg.test(value)) {
      setValidation(true)
    } else {
      setValidation(false)
    }
    setEmail(value)
  }
  return (
    <React.Fragment>
      <div
        className='input-co'
        style={validation ? { borderBottom: '#e87c03 solid 1px' } : {}}
      >
        <input
          type='email'
          id='email'
          placeholder=' '
          onChange={emailValidation}
        />
        <label htmlFor='email'>Email or phone number</label>
      </div>
      {validation && <div className='text-validation'>Enter a valid email</div>}
    </React.Fragment>
  )
}

export default EmailInput
