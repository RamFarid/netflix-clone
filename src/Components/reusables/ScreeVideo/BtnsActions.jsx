import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { useSearchParams } from 'react-router-dom'
import AddBtn from '../AddBtn'
import LikeBtn from '../LikeBtn'

function BtnsActions({ playAction, isPopup, requestFor, videoId, movie }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const handleBtn = () => {
    setSearchParams({ title: videoId, requestFor: requestFor })
  }
  return (
    <div className='video-actions'>
      <button className='play' onClick={playAction}>
        <BsFillPlayFill size={35} /> Play
      </button>
      {isPopup === true ? (
        <React.Fragment>
          <AddBtn movie={movie} />
          <LikeBtn />
        </React.Fragment>
      ) : (
        <button className='more' onClick={handleBtn}>
          <AiOutlineInfoCircle size={22} /> More Info
        </button>
      )}
    </div>
  )
}

export default BtnsActions
