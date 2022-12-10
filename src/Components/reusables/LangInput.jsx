import React from 'react'

function LangInput() {
  return (
    <select
      name='lang'
      id='lang'
      onChange={() => {
        window.location.reload()
      }}
    >
      <option value='ar'>العربية</option>
      <option value='en'>English</option>
    </select>
  )
}

export default LangInput
