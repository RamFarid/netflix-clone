import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function ExitBtn({ isPopup }) {
  if (!isPopup) return
  return (
    <div
      className='exit-btn'
      onClick={() => alert('مش شغال. كسلت اعمله دوس علي الطبقة السودة')}
    >
      <AiOutlineClose />
    </div>
  )
}

export default ExitBtn
