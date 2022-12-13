import React, { useState } from 'react'
import FilmData from '../../../Components/reusables/Title/FilmImg'
import TopPage from '../../../Components/reusables/Title/TopPage'
import AppLaunch from '../../../Components/reusables/Title/AppLaunch'
import '../../../Styles/Browse/titlePage.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import tmdb, { Request } from '../../../APIs/apiMain'
import { isBrowser } from 'react-device-detect'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css'
function Title() {
  const navigateTo = useNavigate()
  const [film, setFilm] = useState({})
  const location = useLocation()
  const params = useParams()
  useEffect(() => {
    document.title = Request.titleGenerator(film) || 'Netflix'
  }, [film])
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
            toast.error(
              new Error('Not found work') + ', Redirect to Home page',
              {
                onClose: () => {
                  navigateTo('/browse')
                },
                icon: <AiOutlineQuestionCircle size={20} fill='#d4001d' />,
                style: {
                  background: '#141414',
                  fontSize: '14px',
                  color: '#d4001d',
                },
              }
            )
          } else {
            toast.error(
              new Error(e.response.data.status_message) +
                ', Redirect to Home page',
              {
                onClose: () => {
                  navigateTo('/browse')
                },
                icon: <AiOutlineQuestionCircle size={20} fill='#d4001d' />,
                style: {
                  background: '#141414',
                  fontSize: '14px',
                  color: '#d4001d',
                },
              }
            )
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
      <ToastContainer
        position='top-center'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        draggable
        theme='dark'
        transition={Zoom}
      />
    </React.Fragment>
  )
}

export default Title
