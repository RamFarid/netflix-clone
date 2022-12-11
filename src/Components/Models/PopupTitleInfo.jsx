import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import VideoBItem from '../reusables/Row/VideoBItem'
import InfiniteScroll from 'react-infinite-scroll-component'

import '../../Styles/Browse/pop-up-title-info.css'
import tmdb, { Request } from '../../APIs/apiMain'
import { useRef } from 'react'
function PopupTitleInfo({ handleClosingTab, title, fetchTitle }) {
  const containerRef = useRef()
  const pagesRef = useRef(1)
  const [isEnd, setIsEnd] = useState(true)
  const [movies, setMovies] = useState([])
  const getData = async () => {
    if (pagesRef.current === 10) return setIsEnd(false)
    tmdb
      .get(`${fetchTitle}`, {
        params: {
          page: pagesRef.current,
        },
      })
      .then((res) => {
        setMovies([...movies, ...res.data.results])
        pagesRef.current += 1
      })
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    getData()
    window.scrollTo(0, 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return ReactDOM.createPortal(
    <motion.section
      ref={containerRef}
      className='pop-up-info'
      onClick={handleClosingTab}
    >
      <div className='data'>
        <h2>{title}</h2>
        <div>
          <InfiniteScroll
            dataLength={movies.length}
            hasMore={isEnd}
            next={getData}
            className='system'
            loader={<div>Fetching Data...</div>}
            endMessage={
              <div style={{ display: 'block', color: 'red' }}>
                Dude! That's enough, subscribe on official{' '}
                <a
                  style={{ textDecoration: 'underline' }}
                  href='https://www.netflix.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  Netflix
                </a>
              </div>
            }
          >
            {movies.map((movie, id) => {
              return (
                <VideoBItem
                  alt={Request.titleGenerator(movie)}
                  img={Request.imgGenerator(movie)}
                  key={id + 1}
                  normalView={false}
                />
              )
            })}
          </InfiniteScroll>
        </div>
      </div>
    </motion.section>,
    document.getElementById('pop-up-info')
  )
}

export default PopupTitleInfo
