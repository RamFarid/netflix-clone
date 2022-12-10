import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Components/Private/Footer'
import Header from '../../../Components/Private/Header/Header'
import { RootContext } from '../../../Contexts/RootContext'
import TrendingdDataProvider from '../../../Contexts/TrendingdData'
import '../../../Styles/Browse/header.css'
import '../../../Styles/Browse/browse.css'
import '../../../Styles/Browse/footer.css'

import { useContext } from 'react'
import { isBrowser, MobileView } from 'react-device-detect'
import MobileHeader from '../../../Components/Private/Header/MobileHeader'
const APP_CONTAINER_STYLES = {
  color: '#fff',
}

function Browse() {
  const rootRef = useContext(RootContext)
  return (
    <TrendingdDataProvider>
      <div ref={rootRef} className='semi-ref'>
        {isBrowser && <Header />}
        <MobileView>
          <MobileHeader />
        </MobileView>
        <main style={APP_CONTAINER_STYLES}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </TrendingdDataProvider>
  )
}

export default Browse
