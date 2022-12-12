import React from 'react'
import ReactDOM from 'react-dom'
import ram from '../../Assets/Ram.jpeg'
import Genres from '../../APIs/genres'

import '../../Styles/Browse/mobile-menu.css'
import { Link } from 'react-router-dom'
function Menu({ setMenu }) {
  const handleClosingTab = (e) => {
    if (e.target.className === e.currentTarget.className) {
      setMenu(false)
      document.body.classList.remove('noscroll')
    }
  }
  return ReactDOM.createPortal(
    <section className='menu' role='menu' onClick={handleClosingTab}>
      <div className='data'>
        <div className='profile'>
          <div className='profile-data'>
            <div className='avatar'>
              <img src={ram} alt='ram' />
            </div>
            <h3>Ram</h3>
          </div>
          <div className='profile-item'>Account</div>
          <div className='profile-item'>Help Cneter</div>
          <div className='profile-item'>Sign Out Of Netflix</div>
        </div>
        <div className='menu-item active'>Home</div>
        {Genres.movie.map((movie) => {
          return (
            <Link className='menu-item' key={movie.id}>
              {movie.name}
            </Link>
          )
        })}
      </div>
    </section>,
    document.getElementById('mobile-menu')
  )
}

export default Menu
