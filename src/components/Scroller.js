import React from 'react'
import moneyscroller from '../../static/img/moneyscroller.png'

function Scroller() {
  return (
    <div style={{
      overflowX: "hidden",
      height: "200px"
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
