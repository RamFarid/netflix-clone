import { useEffect, useState } from 'react'
import tmdb, { Request } from '../APIs/apiMain'

function useGetTrending(type = 'all', time = 'day') {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      await tmdb
        .get(`${Request.trendingURL}${type}/${time}`)
        .then((res) => {
          setData(res.data.results)
        })
        .catch((e) => console.log(e))
    }

    getData()
  }, [type, time])

  return data
}

export default useGetTrending
