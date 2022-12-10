import React, { useState } from 'react'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillHeart,
  AiOutlineHeart,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import { motion } from 'framer-motion'
import '../../Styles/Browse/like-btn.css'

function LikeBtn() {
  const [interactions, setInteractions] = useState('')
  const [animation, setAnimation] = useState(false)
  const handleInteractives = (value) => {
    if (interactions === value) return setInteractions('')
    return setInteractions(value)
  }
  return (
    <div
      className='main-btn inter-btns'
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
    >
      {interactions === 'like' ? (
        <AiFillLike />
      ) : interactions === 'dislike' ? (
        <AiFillDislike />
      ) : interactions === 'love' ? (
        <AiFillHeart />
      ) : (
        <AiOutlineLike />
      )}

      <div className='likes-list'>
        <motion.span
          animate={
            animation === true
              ? {
                  opacity: 1,
                  x: 0,
                }
              : { opacity: 0, x: 40 }
          }
          transition={{ type: 'just' }}
          className='list-btn'
          onClick={() => handleInteractives('dislike')}
        >
          {interactions === 'dislike' ? (
            <AiFillDislike />
          ) : (
            <AiOutlineDislike />
          )}
        </motion.span>
        <span className='list-btn' onClick={() => handleInteractives('like')}>
          {interactions === 'like' ? <AiFillLike /> : <AiOutlineLike />}
        </span>
        <motion.span
          initial={false}
          animate={
            animation === true
              ? {
                  opacity: 1,
                  x: 0,
                }
              : { opacity: 0, x: -40 }
          }
          transition={{ type: 'just' }}
          className='list-btn'
          onClick={() => handleInteractives('love')}
        >
          {interactions === 'love' ? <AiFillHeart /> : <AiOutlineHeart />}
        </motion.span>
      </div>
    </div>
  )
}

export default LikeBtn
