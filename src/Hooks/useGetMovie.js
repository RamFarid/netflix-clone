import { useEffect, useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import tmdb from '../APIs/apiMain'

function useGetMovie(type, id) {
  const navigateTo = useNavigate()
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
          toast.error(
            new Error(e.response.data.status_message) +
              ', Redirect to Home page',
            {
              onClose: () => {
                navigateTo('/browse')
              },
              icon: <AiOutlineQuestionCircle size={20} fill='#d4001d' />,
              style: {
                background: '#141414',
                fontSize: '14px',
                color: '#d4001d',
              },
            }
          )
          setLoader(false)
        })
    }
    if (id !== undefined) {
      getData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, type])

  return [data, recomendations, loader]
}

export default useGetMovie
