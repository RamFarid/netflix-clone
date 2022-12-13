import React, { useEffect, useRef, useState } from 'react'
import YTPlayer from '../YTPlayer'
import '../../../Styles/Browse/youtube-video.css'
import useVideoPlayer from '../../../Hooks/useVideoPlayer.js'
import BackgroundImg from './BackgroundImg'

// API
import tmdb, { Request } from '../../../APIs/apiMain'
import LogoImg from './LogoImg'
import Description from './Description'
import BtnsActions from './BtnsActions'
import BtnsControls from './BtnsControls'
import ExitBtn from './ExitBtn'
import { toast } from 'react-toastify'

function ScreenVideo({ isPopup, movieData, requestFor }) {
  const [trendingData, setTrendingData] = useState([])
  const [movie, setMovie] = useState({})
  const getTrendingData = async () => {
    tmdb
      .get(`${Request.trendingURL}${requestFor}/day`)
      .then((res) => {
        setTrendingData(res.data.results)
      })
      .catch((e) => console.log(e))
  }
  const getVideoData = async () => {
    const videoNo = trendingData[Math.trunc(Math.random() * 20 + 1)]?.id
    tmdb
      .get(`${requestFor}/${videoNo}?append_to_response=credits,videos,images`)
      .then((res) => {
        setMovie(res.data)
      })
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    if (isPopup !== true) {
      getTrendingData()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (trendingData.length !== 0) {
      getVideoData()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trendingData])
  const backGroundImg =
      Request.imgGenerator(movieData) || Request.imgGenerator(movie),
    logoImg =
      movieData?.images?.logos[0]?.file_path ||
      movie?.images?.logos[0]?.file_path,
    description = movieData?.overview || movie?.overview,
    video =
      Request.movieShowHandler(movieData?.videos?.results) ||
      Request.movieShowHandler(movie?.videos?.results),
    title = Request.titleGenerator(movie) || Request.titleGenerator(movieData),
    id = movie?.id || movieData?.id
  function playAction() {
    if (video === undefined) {
      toast.error(
        'ERROR ocurred while open video, This might me happend Bec. No resources found in FREE API'
      )
      return
    }
    if (video) window.open(`https://www.youtube.com/embed/${video}`)
  }
  const YTPlayerRef = useRef()
  const {
    active,
    background,
    mute,
    controlHandler,
    onEndHandler,
    onPlayHandler,
    onReadyHandler,
    btnAppereance,
  } = useVideoPlayer(YTPlayerRef)
  return (
    <section
      className='Screen-Video'
      style={isPopup ? { height: '480px' } : {}}
    >
      {/*<div className='overlay'></div>*/}
      <div className='overlay2'></div>
      <div className='media-container'>
        <BackgroundImg
          background={background}
          alt={title}
          imgURL={backGroundImg}
        />
        <YTPlayer
          ref={YTPlayerRef}
          onEnd={onEndHandler}
          onPlay={onPlayHandler}
          onReady={onReadyHandler}
          videoId={video}
        />
      </div>
      <article>
        <figure className={isPopup === true ? null : active()}>
          <LogoImg title={title} logoImg={logoImg} />

          <Description description={description} isPopup={isPopup} />
          <div className='btns'>
            <BtnsActions
              isPopup={isPopup}
              playAction={playAction}
              requestFor={requestFor}
              videoId={id}
              movie={movieData || movie}
            />
            <BtnsControls
              btnAppereance={btnAppereance}
              controlHandler={controlHandler}
              isPopup={isPopup}
              mute={mute}
            />
          </div>
        </figure>
      </article>
      <ExitBtn isPopup={isPopup} />
    </section>
  )
}

export default ScreenVideo
