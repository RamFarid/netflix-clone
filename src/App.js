import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Browse from './Routes/Private/Browse/Browse'
import LandingPage from './Routes/LandingPage'
import Login from './Routes/Login'
import ScrollToTop from './ScrollToTop'
import Home from './Routes/Private/Browse/Outlets/Home'
import TVShows from './Routes/Private/Browse/Outlets/TVShows'
import Latest from './Routes/Private/Browse/Outlets/Latest'
import MyList from './Routes/Private/Browse/Outlets/MyList'
import Movies from './Routes/Private/Browse/Outlets/Movies'
import { useEffect } from 'react'
import Title from './Routes/Private/Browse/Title'
import AccessRoutes from './Routes/Private/AccessRoutes'
import AnonymousRoute from './Routes/Private/AnonymousRoute'
import SearchListContextProvider from './Contexts/SearchListContext'
function App() {
  useEffect(() => {
    console.log(
      "%cWarning!\n\n%cDon't try to RESIZE window because most styles and media queries implemented with JAVASCRIPT\nSo if you want to resize window reload it after resizing",
      'font-size: 30px; color:#ffcc00',
      'color: #ff3333; font-size: 16px'
    )
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AnonymousRoute />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<AccessRoutes />}>
          <Route
            path='/browse'
            element={
              <SearchListContextProvider>
                <Browse />
              </SearchListContextProvider>
            }
          >
            <Route index element={<Home />} />
            <Route path='tv-shows' element={<TVShows />} />
            <Route path='movies' element={<Movies />} />
            <Route path='latest' element={<Latest />} />
            <Route path='my-list' element={<MyList />} />
          </Route>
          <Route path='/browse/movie/:id' element={<Title />} />
          <Route path='/browse/tv/:id' element={<Title />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}
export default App
