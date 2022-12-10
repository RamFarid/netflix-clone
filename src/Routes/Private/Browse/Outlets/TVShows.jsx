import React from 'react'
import ScreenVideo from '../../../../Components/reusables/ScreeVideo/ScreenVideo'
import Slider from '../../../../Components/reusables/Row/Slider'

import { isBrowser } from 'react-device-detect'
import SubHeader from '../../../../Components/reusables/Sub Header/SubHeader'

// API
import { Request } from '../../../../APIs/apiMain'
function TVShows() {
  return (
    <React.Fragment>
      {isBrowser && <ScreenVideo requestFor='tv' />}
      <SubHeader genre='TVshows' isMovies={false} />
      {Request.tvShows.map((slider, id) => {
        return (
          <Slider
            category={slider.link}
            title={slider.title}
            key={id}
            requestFor={'tv'}
          />
        )
      })}
    </React.Fragment>
  )
}

export default TVShows
