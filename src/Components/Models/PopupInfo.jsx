import React from 'react'
import ReactDOM from 'react-dom'
import ScreenVideo from '../reusables/ScreeVideo/ScreenVideo'
import { useEffect } from 'react'
import useGetMovie from '../../Hooks/useGetMovie'
import { Request } from '../../APIs/apiMain'
import Evaluation from '../reusables/Evaluation'
import RealeaseOn from '../reusables/RealeaseOn'
import MoreLikeThis from '../reusables/MoreLikeThis'
import InfoItem from '../reusables/PopUpInfoModels/InfoItem'
import PopupNudity from '../reusables/PopUpInfoModels/PopupNudity'
import PopupMovieTime from '../reusables/PopUpInfoModels/PopupMovieTime'
import HDItem from '../reusables/HDItem'
import PopupDescription from '../reusables/PopUpInfoModels/PopupDescription'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  PopupSkeletonMore,
  PopupSkeletonAbout,
} from '../reusables/Skeletons loader/PopupSkeleton'

function PopupInfo({ handleClosingTab }) {
  const redirectTo = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const videoId = searchParams.get('title')
  const requestFor = searchParams.get('requestFor')
  const [movie, recomendations, loader] = useGetMovie(requestFor, videoId)
  console.log(movie)
  const title = Request.titleGenerator(movie)
  const evaluation = movie?.vote_average
  const desc = movie?.overview
  const casts = movie?.credits?.cast?.map((actor) => {
    return (
      <span className='more__links' key={actor.id}>
        {actor.name},{' '}
      </span>
    )
  })
  const fewCasts = movie?.credits?.cast?.splice(0, 6).map((actor) => {
    return (
      <span className='more__links' key={actor.id + 1}>
        {actor.name},{' '}
      </span>
    )
  })
  const date =
    requestFor === 'tv'
      ? movie?.first_air_date?.slice(0, 4)
      : movie?.release_date?.slice(0, 4)
  const genres = movie?.genres?.map((genre, id) => {
    return (
      <span className='genre__item' key={id + 11}>
        {genre.name},{' '}
      </span>
    )
  })
  const fewGenres = movie?.genres?.splice(0, 6).map((genre, id) => {
    return (
      <span className='genre__item' key={id + 10}>
        {genre.name},{' '}
      </span>
    )
  })
  const directoriesObjects = movie?.credits?.crew?.filter((person) => {
    return person.department === 'Directing'
  })
  const directories = directoriesObjects?.map((directory, i) => {
    if (i + 1 === directoriesObjects?.length) return `${directory.name}`
    return `${directory.name}, `
  })
  const seasons = movie?.seasons?.length
  const time = movie?.runtime
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    document.title = Request.titleGenerator(movie) || 'Netflix By Ram'
  }, [movie])
  return ReactDOM.createPortal(
    <section
      className='pop-up-info'
      onClick={(e) => {
        handleClosingTab(e)
        if (e.target.className === e.currentTarget.className) {
          setSearchParams({})
          redirectTo(window.location.pathname)
        }
      }}
    >
      <div className='data'>
        <ScreenVideo isPopup={true} fetchType='movie' movieData={movie} />
        <div className='co'>
          {loader === false ? (
            <div className='more'>
              <div className='left'>
                <div className='top'>
                  <Evaluation evaluation={evaluation} />
                  <RealeaseOn date={date} />
                  <PopupNudity />
                  <PopupMovieTime time={time} seasons={seasons} />
                  <HDItem />
                </div>
                <PopupDescription description={desc} />
              </div>
              <div className='right'>
                <InfoItem array={fewCasts} title='Casts' btnMore={true} />
                <InfoItem array={fewGenres} title='Genres' />
                <InfoItem array={genres} title='This movie is' />
              </div>
            </div>
          ) : loader === true ? (
            <PopupSkeletonMore />
          ) : null}
          <hr />
          <MoreLikeThis requestFor={requestFor} readyData={recomendations} />
          {loader === false ? (
            <div className='another-data' id='more-about-amovie'>
              <h5>About {title}.</h5>
              <InfoItem array={directories} title='Directories' />
              <InfoItem array={casts} title='Cast' />
              <InfoItem array={genres} title='Genres' />
              <InfoItem array={genres} title='This movie is' />
              <div className='info'>
                <span className='mark'></span>
                <span className='nudity'>Not sure</span>
              </div>
            </div>
          ) : loader === true ? (
            <PopupSkeletonAbout />
          ) : null}
        </div>
      </div>
    </section>,
    document.getElementById('pop-up-info')
  )
}

export default PopupInfo
