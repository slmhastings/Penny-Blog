import React from 'react'
import moneyscroller from '../../static/img/moneyscroller.jpg'

function Scroller() {
  return (
    
      <div
        className="marquee"
      >
        <img style={{
          height: 'auto',
          width: '100%',
          padding: '25px'
        }} src={moneyscroller}></img>
      </div>
    
  )
}

export default Scroller
