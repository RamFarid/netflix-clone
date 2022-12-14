import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchNotFound() {
  const [searchParams] = useSearchParams()
  return (
    <div className='not-found-search'>
      <p>
        Your search for {searchParams.get('query')} did not have any matches
      </p>
      <p>Suggesions:</p>
      <ul>
        <li>Try different keywords</li>
        <li>Looking for a movie or TV show?</li>
        <li>Try using a movie, TV show title, an actor or director</li>
        <li>Try a genre, like comedy, romance, sports, or drama</li>
      </ul>
    </div>
  )
}

export default SearchNotFound
