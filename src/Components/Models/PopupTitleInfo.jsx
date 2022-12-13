import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import VideoBItem from '../reusables/Row/VideoBItem'
import InfiniteScroll from 'react-infinite-scroll-component'

import '../../Styles/Browse/pop-up-title-info.css'
import tmdb from '../../APIs/apiMain'
import { useRef } from 'react'
import { toast } from 'react-toastify'
function PopupTitleInfo({ handleClosingTab, title, fetchTitle }) {
  const pagesRef = useRef(1)
  const [isEnd, setIsEnd] = useState(true)
  const [movies, setMovies] = useState([])
  const getData = async () => {
    console.log('Func play')
    if (pagesRef.current === 10) {
      console.log('Ref === 10')
      setIsEnd(false)
      return
    }
    tmdb
      .get(`${fetchTitle}`, {
        params: {
          page: pagesRef.current,
        },
      })
      .then((res) => {
        console.log('Done fetch')
        setMovies([...movies, ...res.data.results])
        pagesRef.current += 1
      })
      .catch((e) => {
        console.log(e)
        toast.error(new Error(e.response.data.status_message))
        console.log('Error fetch')
      })
  }
  useEffect(() => {
    getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    console.log(movies.length)
    console.log(isEnd)
  }, [movies, isEnd])
  return ReactDOM.createPortal(
    <section className='pop-up-info' onClick={handleClosingTab}>
      <div className='data'>
        <h2>{title}</h2>
        <InfiniteScroll
          dataLength={movies.length}
          hasMore={isEnd}
          next={() => console.log('In boom!')}
          className='system'
          loader={<div>Fetching Data...</div>}
        >
          {movies.map((movie, id) => {
            return <VideoBItem movie={movie} key={id + 1} />
          })}
        </InfiniteScroll>
      </div>
    </section>,
    document.getElementById('pop-up-info')
  )
}

export default PopupTitleInfo
