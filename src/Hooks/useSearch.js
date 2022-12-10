import { useEffect, useState } from 'react'
import tmdb, { Request } from '../APIs/apiMain'

function useSearch(query, searchType = 'movie') {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      await tmdb
        .get(`${Request.searchURL}${searchType}`, {
          params: {
            query: query,
          },
        })
        .then((res) => {
          setData(res.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getData()
  }, [query, searchType])

  return data
}

export default useSearch
