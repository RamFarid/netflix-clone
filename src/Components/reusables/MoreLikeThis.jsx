import React, { useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import useGetMore from '../../Hooks/useGetMore'
import '../../Styles/Browse/more-like-this.css'
import MoreLikeThisItem from './MoreLikeThisItem'

function MoreLikeThis({ requestFor, readyData }) {
  const [isPaginated, setIsPaginated] = useState(false)
  const systemRef = useRef()
  const [apiData] = useGetMore(requestFor, readyData)
  const paginationHandling = () => {
    setIsPaginated((pre) => !pre)
    systemRef.current.classList.toggle('active')
  }
  const dataGenerator = () => {
    let data
    if (apiData?.length !== 0) {
      data = apiData
    }
    if (readyData?.length !== 0) {
      data = readyData
    }
    return data
  }
  const data = dataGenerator()
  return (
    <React.Fragment>
      <div className='title'>More Like This:</div>
      <div className='more-like-this__container' ref={systemRef}>
        {isPaginated === false && <div className='overlay2'></div>}
        {data
          ? data.map((movie) => {
              return (
                <MoreLikeThisItem
                  movie={movie}
                  key={movie.id}
                  requestFor={requestFor}
                />
              )
            })
          : null}
      </div>
      <div className='pag-co'>
        <hr />
        <div className='pag-btn' onClick={paginationHandling}>
          {isPaginated === true ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
    </React.Fragment>
  )
}

export default MoreLikeThis
