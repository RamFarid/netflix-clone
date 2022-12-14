import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { SearchListContext } from '../../Contexts/SearchListContext'

import '../../Styles/Browse/searchLists.css'
import SearchNotFound from '../Private/SearchNotFound'
import VideoBItem from '../reusables/Row/VideoBItem'
function SearchList() {
  const { searchItems } = useContext(SearchListContext)
  return ReactDOM.createPortal(
    <section className='search'>
      <div className='data'>
        {searchItems.filter(
          (item) => item.media_type === 'tv' || item.media_type === 'movie'
        ).length !== 0 ? (
          searchItems
            .filter(
              (item) => item.media_type === 'tv' || item.media_type === 'movie'
            )
            .map((item) => {
              return (
                <VideoBItem
                  movie={item}
                  requestFor={item.media_type}
                  key={item.id + 50}
                />
              )
            })
        ) : (
          <SearchNotFound />
        )}
      </div>
    </section>,
    document.getElementById('search')
  )
}

export default SearchList
