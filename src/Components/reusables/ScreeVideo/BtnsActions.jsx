import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import AddBtn from '../AddBtn'
import LikeBtn from '../LikeBtn'

function BtnsActions({ playAction, isPopup, setPopUpInfo }) {
  return (
    <div className='video-actions'>
      <button className='play' onClick={playAction}>
        <BsFillPlayFill size={35} /> Play
      </button>
      {isPopup === true ? (
        <React.Fragment>
          <AddBtn />
          <LikeBtn />
        </React.Fragment>
      ) : (
        <button className='more' onClick={setPopUpInfo}>
          <AiOutlineInfoCircle size={22} /> More Info
        </button>
      )}
    </div>
  )
}

export default BtnsActions
