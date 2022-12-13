import { useEffect, useState } from 'react'
import tmdb from '../APIs/apiMain'

function useGetMovie(type, id) {
  const [error, setError] = useState({ isError: false, msg: '' })
  const [data, setData] = useState({})
  const [recomendations, setRecomendations] = useState([])
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    const getData = async () => {
      tmdb
        .get(
          `${type}/${id}?append_to_response=credits,videos,images,recommendations,content_ratings`
        )
        .then((res) => {
          setLoader(false)
          setData(res.data)
          setRecomendations(res.data.recommendations.results)
        })
        .catch((e) => {
          console.log(e)
          setError({ isError: true, msg: e.response.data.status_message })
          setLoader(false)
        })
    }
    if (id !== undefined) {
      getData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, type])

  return [data, recomendations, loader, error]
}

export default useGetMovie
