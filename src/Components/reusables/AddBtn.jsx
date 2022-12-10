import React, { useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { MdDone } from 'react-icons/md'
function AddBtn() {
  const [action, setAction] = useState(false)
  return (
    <div className='inter-btns' onClick={() => setAction((prev) => !prev)}>
      {action ? <MdDone /> : <IoAdd />}
    </div>
  )
}

export default AddBtn
