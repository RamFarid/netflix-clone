import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

function ClassificationWith() {
  return (
    <div className='Classification'>
      <span className='symbol'>
        <HiOutlineMenuAlt1 />
      </span>
      <span className='symbol'>
        <BiCategory />
      </span>
    </div>
  )
}

export default ClassificationWith
