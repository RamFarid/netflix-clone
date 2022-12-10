import React from 'react'
import { isBrowser } from 'react-device-detect'
import { Request } from '../../../../APIs/apiMain'
import Slider from '../../../../Components/reusables/Row/Slider'
import ScreenVideo from '../../../../Components/reusables/ScreeVideo/ScreenVideo'
import SubHeader from '../../../../Components/reusables/Sub Header/SubHeader'

function Movies() {
  return (
    <React.Fragment>
      <React.Fragment>
        {isBrowser && <ScreenVideo requestFor='movie' />}
        <SubHeader genre='Movies' isMovies={true} />
        {Request.movie.map((slider, id) => {
          return (
            <Slider
              category={slider.link}
              title={slider.title}
              key={id}
              requestFor={'movie'}
            />
          )
        })}
      </React.Fragment>
    </React.Fragment>
  )
}

export default Movies
