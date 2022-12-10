import React from 'react'
import { footerLinks } from '../../data/login-footerLinks.js'
import FooterLinksItem from '../reusables/FooterLinksItem'
import LangInput from '../reusables/LangInput'
function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer__item'>Questions? Contact us.</div>
        <div className='footer__grid'>
          {footerLinks.map(({ link, title }, id) => {
            return <FooterLinksItem link={link} title={title} key={id + 6} />
          })}
        </div>
        <LangInput />
      </div>
    </footer>
  )
}

export default Footer
