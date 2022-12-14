import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSearchParams } from 'react-router-dom'

function ExitBtn({ isPopup }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  if (!isPopup) return
  return (
    <div className='exit-btn' onClick={() => setSearchParams({})}>
      <AiOutlineClose />
    </div>
  )
}

export default ExitBtn
