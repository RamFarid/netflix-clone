import React from 'react'
import { useContext } from 'react'
import VideoBItem from '../../../../Components/reusables/Row/VideoBItem'
import { ListContext } from '../../../../Contexts/ListContext'
import '../../../../Styles/Browse/my-list.css'

function MyList() {
  const { list } = useContext(ListContext)
  const addMovies = () => {
    if (list.length === 0) {
      return (
        <span className='null'>
          You havn't added any titles to your list yet.
        </span>
      )
    }
    return list.map((movie) => {
      let requestFor = movie.title ? 'movie' : 'tv'
      return (
        <VideoBItem movie={movie} requestFor={requestFor} key={movie.id + 1} />
      )
    })
  }
  return (
    <section
      className='my-list'
      style={
        list.length === 0 ? { minHeight: '120vh' } : { minHeight: 'unset' }
      }
    >
      <h2>My List</h2>
      <div
        className='LIST'
        style={list.length === 0 ? { justifyContent: 'center' } : {}}
      >
        {addMovies()}
      </div>
    </section>
  )
}

export default MyList
