import { useEffect, useState } from 'react'
function useHeaderChanges(value) {
  const [isTop, setIsTop] = useState(false)
  useEffect(() => {
    const handleHeaderColor = () => {
      if (window.scrollY !== 0) return setIsTop(true)
      return setIsTop(false)
    }

    window.addEventListener('scroll', handleHeaderColor)
    return () => {
      window.removeEventListener('scroll', handleHeaderColor)
    }
  })

  const isTopGenerator = () => {
    return isTop ? `${value} top` : value
  }
  return isTopGenerator
}

export default useHeaderChanges
