import React from 'react'
import FooterLinksItem from '../../reusables/FooterLinksItem'
import { footerLinks } from '../../../data/lp-footerlinks.js'
import LangInput from '../../reusables/LangInput'

import '../../../Styles/Landing/footer.css'
function Footer() {
  return (
    <footer className='lp-s'>
      <div className='container'>
        <FooterLinksItem title='Questions? Contact us.' link='' />
        <div className='footer__grid'>
          {footerLinks.map(({ link, title }, id) => {
            return <FooterLinksItem key={id + 2} link={link} title={title} />
          })}
        </div>
        <LangInput />
      </div>
    </footer>
  )
}

export default Footer
