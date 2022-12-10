import { useContext, useRef, useState } from 'react'
import { RootContext } from '../Contexts/RootContext'

function usePopup() {
  const rootRef = useContext(RootContext)
  const scrollValue = useRef(0)
  const [popupInfo, setPopupInfo] = useState(false)

  const stylesGenerator = (normalView) => {
    // احطياتي!!
    if (normalView === false) {
      alert('قريبا هذة الصفحة! الموقع في التحديثات')
      return
    }
    scrollValue.current = window.scrollY
    setPopupInfo(true)
    const root = rootRef.current
    root.style.top = `-${scrollValue.current}px`
    root.style.left = '0'
    root.style.right = '0'
    root.style.bottom = '0'
    root.style.position = 'fixed'
  }
  const handleClosingTab = (e) => {
    if (e.target.className === e.currentTarget.className) {
      setPopupInfo(false)
      const root = rootRef.current
      root.style.position = 'unset'
      root.style.top = `unset`
      root.style.left = 'unset'
      root.style.right = 'unset'
      root.style.bottom = 'unset'
      window.scrollTo(0, scrollValue.current)
    }
  }
  return {
    popupInfo,
    scrollValue,
    setPopupInfo,
    handleClosingTab,
    stylesGenerator,
  }
}

export default usePopup
