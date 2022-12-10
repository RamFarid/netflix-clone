import React from 'react'

function FooterLinksItem({ link, title }) {
  return (
    <a href={link} className='footer__item'>
      {title}
    </a>
  )
}

export default FooterLinksItem
