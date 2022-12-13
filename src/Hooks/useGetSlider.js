import { useEffect, useState } from 'react'
import tmdb from '../APIs/apiMain'

function useGetSlider(category) {
  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      tmdb
        .get(category)
        .then((res) => {
          setLoader(false)
          setData(res.data.results)
        })
        .catch((err) => {
          console.log(err)
          setLoader(false)
        })
    }
    getData()
  }, [category])

  return [data, loader]
}

export default useGetSlider
