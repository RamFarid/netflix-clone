import { useEffect, useState } from 'react'
import tmdb from '../APIs/apiMain'

function useGetSlider(category) {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      tmdb
        .get(category)
        .then((res) => {
          setData(res.data.results)
        })
        .catch((err) => console.log(err))
    }
    getData()
  }, [category])

  return data
}

export default useGetSlider
