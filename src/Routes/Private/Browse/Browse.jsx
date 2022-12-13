import React from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import Footer from '../../../Components/Private/Footer'
import Header from '../../../Components/Private/Header/Header'
import { RootContext } from '../../../Contexts/RootContext'
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
const APP_CONTAINER_STYLES = {
  color: '#fff',
}

function Browse() {
  const redirectTo = useNavigate()
  const rootRef = useContext(RootContext)
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const { popupInfo, setPopupInfo, stylesGenerator, handleClosingTab } =
    usePopup(rootRef)
  const title = searchParams.get('title')
  const requestFor = searchParams.get('requestFor')
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
        <div ref={rootRef} className='semi-ref'>
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
        {popupInfo && <PopupInfo handleClosingTab={handleClosingTab} />}
      </ListContextProvider>
    </TrendingdDataProvider>
  )
}

export default Browse
