import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
function CreateAccountInput({ id }) {
  return (
    <React.Fragment>
      <div className='ca-text'>
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <div className='input-co'>
        <input type='email' name='email' id={id} placeholder=' ' />
        <label htmlFor={id}>Email address</label>
        <button>
          Get Started <BiChevronRight size='40' />
        </button>
      </div>
    </React.Fragment>
  )
}

export default CreateAccountInput
