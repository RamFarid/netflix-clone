import React from 'react'
import { Navigation, Pagination, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoBItem from './VideoBItem'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import '../../../Styles/Browse/slider.css'
import '../../../Styles/Browse/slider-item.css'
import { isMobile, isBrowser } from 'react-device-detect'
import useGetSlider from '../../../Hooks/useGetSlider'
import PopupTitleInfo from '../../../Components/Models/PopupTitleInfo'
import usePopup from '../../../Hooks/usePopup.js'
import { SliderSkeleton } from '../Skeletons loader/SliderSkeleton'

const BREAKPOINTS = {
  502: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  800: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
  1005: {
    slidesPerGroup: 5,
    slidesPerView: 5,
  },
  1990: {
    slidesPerGroup: 6,
    slidesPerView: 6,
  },
}

function Slider({ category, title, requestFor, mt }) {
  const [movies, loader] = useGetSlider(category)
  const handleTitle = () => {
    if (isBrowser === true) {
      stylesGenerator()
      return
    }
  }
  const sliderGenerator = () => {
    if (isBrowser === true) {
      return (
        <Swiper
          modules={[Pagination, Navigation]}
          speed={600}
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={5}
          navigation
          pagination
          loop={true}
          allowTouchMove={false}
          breakpoints={BREAKPOINTS}
        >
          {loader === true ? (
            <SliderSkeleton />
          ) : (
            movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <VideoBItem movie={movie} requestFor={requestFor} />
                </SwiperSlide>
              )
            })
          )}
        </Swiper>
      )
    }
    if (isMobile === true) {
      return (
        <Swiper
          modules={[FreeMode]}
          freeMode={{ enabled: true }}
          speed={600}
          slidesPerView={2}
          spaceBetween={5}
          loop={false}
          breakpoints={BREAKPOINTS}
        >
          {loader === true ? (
            <SliderSkeleton />
          ) : (
            movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <VideoBItem movie={movie} requestFor={requestFor} />
                </SwiperSlide>
              )
            })
          )}
        </Swiper>
      )
    }
  }
  const { popupInfo, handleClosingTab, stylesGenerator } = usePopup()
  return (
    <div
      style={mt ? { marginTop: mt } : {}}
      className={
        isMobile
          ? 'Row__Collection mobile-collection'
          : 'Row__Collection desktop-collection'
      }
    >
      <h2
        role='link'
        style={isMobile ? { color: '#999' } : {}}
        onClick={handleTitle}
      >
        <div className='link'>
          {title}
          <span className='explore'>
            <span className='explore-text'>Explore All</span>
            <span className='explore-icon'>
              <MdOutlineKeyboardArrowRight size={17} />
            </span>
          </span>
        </div>
        <div className='swiper-pagination'></div>
      </h2>
      <div
        className='slider'
        style={
          loader === true
            ? { maxHeight: '90px', overflow: 'hidden', maxWidth: '100vw' }
            : {}
        }
      >
        {sliderGenerator()}
      </div>
      {popupInfo && (
        <PopupTitleInfo
          handleClosingTab={handleClosingTab}
          title={title}
          fetchTitle={category}
        />
      )}
    </div>
  )
}
export default Slider
