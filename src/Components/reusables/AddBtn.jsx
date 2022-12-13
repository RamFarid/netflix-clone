import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { IoAdd } from 'react-icons/io5'
import { MdDone } from 'react-icons/md'
import { ListContext } from '../../Contexts/ListContext'

function AddBtn({ movie }) {
  const [action, setAction] = useState(false)
  const { list, setList } = useContext(ListContext)
  useEffect(() => {
    let result = list.find((moviesList) => {
      return movie?.id === moviesList?.id
    })
    if (result) {
      setAction(true)
    }
    if (!result) {
      setAction(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie])
  const handleAddingList = () => {
    if (action === true) {
      let filteredArray = list.filter((eachMovie) => {
        return eachMovie.id !== movie.id
      })
      setList(filteredArray)
      setAction(false)
    }
    if (action === false) {
      setList([...list, movie])
      setAction(true)
    }
  }
  return (
    <div className='inter-btns' onClick={handleAddingList}>
      {action ? <MdDone /> : <IoAdd />}
    </div>
  )
}

export default AddBtn
