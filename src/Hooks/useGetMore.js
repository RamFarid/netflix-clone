import { useEffect } from 'react'
import { useState } from 'react'
import tmdb from '../APIs/apiMain'

function useGetMore(requestFor, readyData) {
  const [data, setData] = useState([])
  useEffect(() => {
    if (readyData?.length === 0) {
      tmdb
        .get(`discover/${requestFor}`, {
          params: {
            page: 2,
          },
        })
        .then((res) => {
          setData(res.data.results)
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data]
}

export default useGetMore
