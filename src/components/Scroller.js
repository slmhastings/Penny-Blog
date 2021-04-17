import React from 'react'
import moneyscroller from '../../static/img/moneyscroller.png'

function Scroller() {
  return (
    
      <div
        className="marquee"
      >
        <img style={{
          height: 'auto',
          width: '75%'
        }} src={moneyscroller}></img>
      </div>
    
  )
}

export default Scroller
