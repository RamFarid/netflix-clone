import React from 'react'
import Header from '../Components/LandingPage/Header/Header'
import Devices from '../Components/LandingPage/Sections/Devices'
import Download from '../Components/LandingPage/Sections/Download'
import Everywhere from '../Components/LandingPage/Sections/Everywhere'
import Footer from '../Components/LandingPage/Footer/Footer'
import Kids from '../Components/LandingPage/Sections/Kids'
import Questions from '../Components/LandingPage/Sections/Questions'

import '../Styles/Landing/landingPage.css'
function LandingPage() {
  return (
    <main className='Landing__Page'>
      <Header />
      <Devices />
      <Download />
      <Everywhere />
      <Kids />
      <Questions />
      <Footer />
    </main>
  )
}

export default LandingPage
