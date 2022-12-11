import React, { useState } from 'react'
import FilmData from '../../../Components/reusables/Title/FilmImg'
import TopPage from '../../../Components/reusables/Title/TopPage'
import AppLaunch from '../../../Components/reusables/Title/AppLaunch'
import '../../../Styles/Browse/titlePage.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import tmdb from '../../../APIs/apiMain'
import { isBrowser } from 'react-device-detect'

function Title() {
  const navigateTo = useNavigate()
  const [film, setFilm] = useState({})
  const location = useLocation()
  const params = useParams()
  useEffect(() => {
    const getMovie = async () => {
      tmdb
        .get(`${location.pathname.slice(7)}`)
        .then((res) => {
          setFilm(res.data)
        })
        .catch((e) => {
          const statusCode = e.response.status
          if (statusCode === 404) {
            alert(new Error('Not found') + ', Redirect to Home page')
            navigateTo('/browse')
          }
          console.log(e)
        })
    }
    if (isBrowser === true) {
      const requestFor = location.pathname.includes('tv') ? 'tv' : 'movie'
      navigateTo(`/browse?title=${params.id}&requestFor=${requestFor}`)
    } else {
      getMovie()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <React.Fragment>
      <div id='single-film-page'>
        <TopPage />
        <FilmData data={film} />
        <AppLaunch />
      </div>
    </React.Fragment>
  )
}

export default Title
