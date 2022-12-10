import { useEffect, useState } from 'react'
import tmdb from '../APIs/apiMain'

function useGetMovie(type, id) {
  const [data, setData] = useState({})
  const [recomendations, setRecomendations] = useState([])
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    const getData = async () => {
      tmdb
        .get(
          `${type}/${id}?append_to_response=credits,videos,images,recommendations`
        )
        .then((res) => {
          setLoader(false)
          setData(res.data)
          setRecomendations(res.data.recommendations.results)
        })
        .catch((e) => {
          console.log(e)
          setLoader(false)
        })
    }
    if (id !== undefined) {
      getData()
    }
  }, [id, type])

  return [data, recomendations, loader]
}

export default useGetMovie
