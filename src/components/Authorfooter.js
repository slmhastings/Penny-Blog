import React from 'react'
import authorfooter from '../../static/img/authorfooter.png'


function Authorfooter() {

  return (
    <div class='author-footer'>
      <div>
        <img style={{
          margin: '0px',
          maxWidth: '88%'
        }}
        src={authorfooter} />
      </div>
      <div>
      <a href="something" style={{
        border: 'solid',
        fontFamily: 'Hatton semibold',
        fontWeight: '400',
        color: '#545454'

      }}>take me to the courses</a>
      </div>
      
    </div>
  )
}

export default Authorfooter