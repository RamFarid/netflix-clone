import React from 'react'
import { Request } from '../../../APIs/apiMain'

function LogoImg({ title, logoImg }) {
  return <img alt={title} src={`${Request.imgURL}${logoImg}`} />
}

export default LogoImg
