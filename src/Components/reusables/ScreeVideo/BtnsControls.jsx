import React from 'react'

function BtnsControls({ btnAppereance, controlHandler, mute, isPopup }) {
  return (
    <div className='control-info'>
      {btnAppereance && (
        <div
          className='vc'
          role='button'
          onClick={controlHandler}
          style={isPopup ? { marginRight: '20px' } : {}}
        >
          {mute()}
        </div>
      )}
      {isPopup === true ? null : <div className='nudity'>Not sure</div>}
    </div>
  )
}

export default BtnsControls
