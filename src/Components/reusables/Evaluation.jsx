import React from 'react'

function Evaluation({ evaluation }) {
  if (evaluation === false || evaluation === 0)
    return <span className='match m-r-10px'>No Votes</span>
  return (
    <span className='match m-r-10px'>
      {Math.trunc((evaluation / 10) * 100)}% Match
    </span>
  )
}

export default Evaluation
