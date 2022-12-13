import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'

function ExitBtn({ isPopup }) {
  if (!isPopup) return
  return (
    <div
      className='exit-btn'
      onClick={() =>
        toast.success('كسلت اعمله ارجع باك او دوس علي الطبقة السوده', {
          icon: '😀',
        })
      }
    >
      <AiOutlineClose />
    </div>
  )
}

export default ExitBtn
