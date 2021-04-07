import React from 'react'
import moneyscroller from '../../static/img/moneyscroller.png'

function Scroller() {
  return (
    <div style={{
      
    }}>
      <div
        className="marquee"
      >
        <img style={{
          height: 'auto',
          
        }} src={moneyscroller}></img>
      </div>
    </div>
  )
}

export default Scroller
