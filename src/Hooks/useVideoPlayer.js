import { useState } from 'react'
import { GiSpeaker } from 'react-icons/gi'
import { FaVolumeMute } from 'react-icons/fa'
import { MdOutlineReplay } from 'react-icons/md'
const useVideoPlayer = (videoRef) => {
  const [btnAppereance, setBtnAppereance] = useState(false)
  const [isBackground, setBackground] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [isMuted, setIsmuted] = useState(true)
  function controlHandler() {
    if (isMuted === true) {
      videoRef.current.internalPlayer.unMute()
      setIsmuted(false)
      return
    }
    if (isMuted === false) {
      videoRef.current.internalPlayer.mute()
      setIsmuted(true)
      return
    }
    if (isMuted === null) {
      videoRef.current.internalPlayer.playVideo()
      videoRef.current.internalPlayer.isMuted().then((res) => setIsmuted(res))
    }
  }
  function onReadyHandler() {}
  function onPlayHandler() {
    setBackground(false)
    setBackground(false)
    setTimeout(() => setIsActive(true), 10000)
    setBtnAppereance(true)
  }
  function onEndHandler() {
    setBackground(true)
    setIsActive(false)
    setIsmuted(null)
  }

  function background() {
    if (isBackground === true) return {}
    if (isBackground === false) return { opacity: '0' }
  }
  function mute() {
    if (isMuted === true) return <FaVolumeMute />
    if (isMuted === false) return <GiSpeaker />
    return <MdOutlineReplay />
  }
  function active() {
    if (isActive === true) return 'video-is-active'
    return ''
  }
  return {
    background,
    active,
    mute,
    onReadyHandler,
    onPlayHandler,
    onEndHandler,
    controlHandler,
    btnAppereance,
  }
}

export default useVideoPlayer

// screenVideo.addEventListener('canplaythrough', onReadyHandler)
// screenVideo.addEventListener('play', onPlayHandler)
// screenVideo.addEventListener('ended', onEndHandler)
