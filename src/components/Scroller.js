import React from 'react'
import moneyscroller from '../../static/img/moneyscroller.png'

function Scroller() {
  return (
    <div
      className="marquee"
      style={{
        width: '100%',
        
      }}
    >
      <img style={{
        width: '100%',
        height: 'auto',
        
      }} src={moneyscroller}></img>
    </div>
  )
}

export default Scroller
