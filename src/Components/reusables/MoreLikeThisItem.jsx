import React from 'react'
import tmdb, { Request } from '../../APIs/apiMain'
import AddBtn from './AddBtn'
import Evaluation from './Evaluation'
import '../../Styles/Browse/more-like-this.css'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function MoreLikeThisItem({ movie }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const requestFor = searchParams.get('requestFor')
  const img = Request.imgGenerator(movie)
  const title = Request.titleGenerator(movie)
  const description = movie?.overview.slice(0, 140)
  const evaluation = movie?.vote_average === 0 ? false : movie?.vote_average
  const date =
    requestFor === 'tv'
      ? movie?.first_air_date?.slice(0, 4)
      : movie?.release_date?.slice(0, 4)
  function getVideo() {
    tmdb
      .get(`${requestFor}/${movie.id}?append_to_response=videos`)
      .then((res) => {
        const movieKey = Request.movieShowHandler(res.data.videos.results)
        if (movieKey !== undefined)
          window.open(`https://www.youtube.com/embed/${movieKey}`)
        if (movieKey === undefined)
          toast.error(
            'ERROR ocurred while open video, This might me happend Bec. No resources found in FREE API'
          )
      })
  }
  return (
    <div className='more-like-this__item' onClick={getVideo}>
      <div className='img-co'>
        <img src={img} alt={title} />
      </div>
      <div className='info'>
        <div className='top'>
          <div className='left'>
            <Evaluation evaluation={evaluation} />
            <span className='release-on'>{date}</span>
          </div>
          <div className='right'>
            <AddBtn />
          </div>
        </div>
        <div className='description'>
          {description || (
            <span style={{ color: 'red' }}>
              No description or overview for this work, that's because this is
              an a free API, it would not in DATA that come from it, or ERROR
              while fetching data
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default MoreLikeThisItem
