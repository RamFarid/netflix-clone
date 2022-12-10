import React, { useState } from 'react'
import FilmData from '../../../Components/reusables/Title/FilmImg'
import TopPage from '../../../Components/reusables/Title/TopPage'
import AppLaunch from '../../../Components/reusables/Title/AppLaunch'
import '../../../Styles/Browse/titlePage.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import tmdb from '../../../APIs/apiMain'
import { BrowserView, isBrowser, MobileView } from 'react-device-detect'
import Home from './Outlets/Home'
import PopupInfo from '../../../Components/Models/PopupInfo'
import usePopup from '../../../Hooks/usePopup'

function Title() {
  const { handleClosingTab, stylesGenerator } = usePopup()
  const [film, setFilm] = useState({})
  const location = useLocation()
  useEffect(() => {
    if (isBrowser === true) {
      stylesGenerator()
    }
    const getMovie = async () => {
      tmdb
        .get(`${location.pathname}`)
        .then((res) => {
          setFilm(res.data)
        })
        .catch((e) => {
          const statusCode = e.response.status
          if (statusCode === 404) {
            alert('Work not found')
          }
          console.log(e)
        })
    }
    getMovie()
  }, [location])
  return (
    <React.Fragment>
      <BrowserView>
        <Home />
        <PopupInfo handleClosingTab={handleClosingTab} />
      </BrowserView>
      <MobileView>
        <div id='single-film-page'>
          <TopPage />
          <FilmData data={film} />
          <AppLaunch />
        </div>
      </MobileView>
    </React.Fragment>
  )
}

export default Title
