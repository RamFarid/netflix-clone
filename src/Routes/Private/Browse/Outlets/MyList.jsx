import React from 'react'
import '../../../../Styles/Browse/my-list.css'

function MyList() {
  return (
    <section className='my-list'>
      <h2>My List</h2>
      <div className='LIST'>
        <span className='null'>
          You havn't added any titles to your list yet.
        </span>
      </div>
    </section>
  )
}

export default MyList
