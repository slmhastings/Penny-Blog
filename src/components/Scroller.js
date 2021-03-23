import React from "react"
import moneyscroller from '../../static/img/moneyscroller.png'

function Scroller() {
  return (
    <div className="marquee">
      <img src={moneyscroller}></img>
    </div>
  )
}

export default Scroller