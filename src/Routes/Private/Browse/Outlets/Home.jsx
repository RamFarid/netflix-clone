import React from 'react'
import ScreenVideo from '../../../../Components/reusables/ScreeVideo/ScreenVideo'
import Slider from '../../../../Components/reusables/Row/Slider'
import '../../../../Styles/Browse/screenVideo.css'
import { isBrowser } from 'react-device-detect'

// APIs
import { Request } from '../../../../APIs/apiMain'
function Home() {
  return (
    <div className='HOME__PAGE'>
      {isBrowser && <ScreenVideo requestFor={'movie'} />}
      {Request.home.map((slider, id) => {
        if (slider.link.includes('tv')) {
          if (id === 0) {
            return (
              <Slider
                mt={'-80px'}
                category={slider.link}
                title={slider.title}
                key={id + 6}
                requestFor={'tv'}
              />
            )
          }
          return (
            <Slider
              category={slider.link}
              title={slider.title}
              key={id + 6}
              requestFor={'tv'}
            />
          )
        }
        if (id === 0) {
          return (
            <Slider
              mt={'-80px'}
              category={slider.link}
              title={slider.title}
              key={id + 6}
              requestFor={'movie'}
            />
          )
        }
        return (
          <Slider
            category={slider.link}
            title={slider.title}
            key={id + 6}
            requestFor={'movie'}
          />
        )
      })}
    </div>
  )
}

export default Home
