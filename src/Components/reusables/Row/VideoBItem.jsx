import React, { useRef } from 'react'
import PopupInfo from '../../Models/PopupInfo'
import usePopup from '../../../Hooks/usePopup.js'

import '../../../Styles/Browse/pop-up-info.css'
import { useSearchParams } from 'react-router-dom'
function VideoBItem({ img, alt, videoId, requestFor, normalView }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const imgRef = useRef()
  const { popupInfo, handleClosingTab, stylesGenerator } = usePopup()
  const imgClick = () => {
    setSearchParams({ title: videoId, requestFor: requestFor })
    stylesGenerator(normalView)
  }
  return (
    <React.Fragment>
      <div className='SLider__Item'>
        <div className='bg-img-co' onClick={imgClick}>
          {<img src={img} alt={alt} ref={imgRef} />}
        </div>

        {popupInfo && <PopupInfo handleClosingTab={handleClosingTab} />}
      </div>
    </React.Fragment>
  )
}

export default VideoBItem

// useEffect(() => {
//   const img = imgRef.current
//   const loadHandle = () => {
//     setLoader(false)
//   }
//   const errorHandle = () => {
//     console.log('ERROR')
//   }
//   img.addEventListener('load', loadHandle)
//   img.addEventListener('error', errorHandle)

//   return () => {
//     img.removeEventListener('load', loadHandle)
//     img.removeEventListener('error', errorHandle)
//   }
// }, [])
