import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import browse_SocialLinks from '../../data/browse_SocialLinks'
import browse_footerLinks from '../../data/browse_footerLinks'

function Footer() {
  const [code, setCode] = useState(false)
  return (
    <footer className='Footer__Browse'>
      <div className='container'>
        <div className='social-links-co'>
          {browse_SocialLinks.map(({ icon, link }, id) => {
            return (
              <div className='social-link-item' key={id + 6}>
                <Link to={link}>{icon}</Link>
              </div>
            )
          })}
        </div>
        <div className='footer__grid'>
          {browse_footerLinks.map(({ text, link }, id) => {
            return (
              <div className='footer__item' key={id + 8}>
                <Link to={link}>{text}</Link>
              </div>
            )
          })}
        </div>
        <button onClick={() => setCode(true)}>
          {code ? '045-309' : 'Service Code'}
        </button>
        <div className='copyrights'>
          &copy; 1997-{new Date().getFullYear()} Netflix, Inc.
        </div>
      </div>
    </footer>
  )
}

export default Footer
