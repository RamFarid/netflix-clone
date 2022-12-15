import React from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import Footer from '../../../Components/Private/Footer'
import Header from '../../../Components/Private/Header/Header'
import TrendingdDataProvider from '../../../Contexts/TrendingdData'
import '../../../Styles/Browse/header.css'
import '../../../Styles/Browse/browse.css'
import '../../../Styles/Browse/footer.css'
import { useContext } from 'react'
import { BrowserView, isMobile, MobileView } from 'react-device-detect'
import MobileHeader from '../../../Components/Private/Header/MobileHeader'
import { useEffect } from 'react'
import usePopup from '../../../Hooks/usePopup'
import PopupInfo from '../../../Components/Models/PopupInfo'
import ListContextProvider from '../../../Contexts/ListContext'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import tmdb from '../../../APIs/apiMain'
import { SearchListContext } from '../../../Contexts/SearchListContext'
import SearchList from '../../../Components/Models/SearchList'

const APP_CONTAINER_STYLES = {
  color: '#fff',
}

function Browse() {
  const { setSearchItems } = useContext(SearchListContext)
  const redirectTo = useNavigate()

  const [searchParams] = useSearchParams()
  const { popupInfo, setPopupInfo, stylesGenerator } = usePopup()
  const title = searchParams.get('title')
  const requestFor = searchParams.get('requestFor')
  const searchQuery = searchParams.get('query')

  // Adding event listener for online and offline mode
  useEffect(() => {
    if (navigator.onLine === false) {
      toast.error("You're Offline", {
        style: { background: '#141414' },
        color: '#d4001d',
      })
    }
    function offLineHandler() {
      toast.error("You're Offline", {
        style: { background: '#141414' },
        color: '#d4001d',
      })
    }
    window.addEventListener('offline', offLineHandler)
    return () => {
      window.removeEventListener('offline', offLineHandler)
    }
  }, [])

  // Search hanldes
  useEffect(() => {
    const getData = async () => {
      tmdb
        .get('search/multi', {
          params: {
            query: searchQuery.trim(),
            include_adult: true,
          },
        })
        .then((res) => {
          setSearchItems(res.data.results)
          console.log(res.data.results)
        })
        .catch((e) => console.log(e))
    }
    const debounceSearch = setTimeout(() => {
      if (searchQuery) {
        document.body.classList.add('noscroll')
        getData()
      }
    }, 1000)

    return () => {
      clearTimeout(debounceSearch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  // Pop up handles
  useEffect(() => {
    if (title && requestFor) {
      if (isMobile === true) {
        redirectTo(`/browse/${requestFor}/${title}`)
      }
      stylesGenerator()
      setPopupInfo(true)
    } else {
      setPopupInfo(false)
      document.body.classList.remove('noscroll')
      document.title = 'Netflix By Ram'
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, requestFor])
  return (
    <TrendingdDataProvider>
      <ListContextProvider>
        <div className='semi-ref'>
          <BrowserView>
            <Header />
          </BrowserView>
          <MobileView>
            <MobileHeader />
          </MobileView>
          <main style={APP_CONTAINER_STYLES}>
            <Outlet />
          </main>
          <Footer />
        </div>
        <ToastContainer
          position='top-center'
          autoClose={false}
          limit={8}
          newestOnTop={false}
          closeOnClick
          draggable
          theme='dark'
          transition={Zoom}
        />
        {popupInfo && <PopupInfo />}
        {searchQuery && <SearchList />}
      </ListContextProvider>
    </TrendingdDataProvider>
  )
}

export default Browse
