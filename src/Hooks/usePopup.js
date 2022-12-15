import { useState } from 'react'

function usePopup() {
  const [popupInfo, setPopupInfo] = useState(false)
  const stylesGenerator = () => {
    setPopupInfo(true)
    document.body.classList.add('noscroll')
  }
  const handleClosingTab = (e) => {
    if (e.target.className === e.currentTarget.className) {
      setPopupInfo(false)
      document.body.classList.remove('noscroll')
      document.title = 'Netflix By Ram'
    }
  }
  return {
    popupInfo,
    setPopupInfo,
    handleClosingTab,
    stylesGenerator,
  }
}

export default usePopup
