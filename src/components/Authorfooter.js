import React from 'react'
import authorfooter from '../../static/img/authorfooter.png'


function Authorfooter() {

  return (
    <div class='author-footer'>
      <div>
        <img style={{
          margin: '0px',
          maxWidth: '88%',
          marginTop: '-32px'
        }}
        src={authorfooter} />
      </div>
      <div class='main-button'
      style={{
        padding: '25px'
      }}>
      <a class="courses" href="/">take me to the courses</a>
      </div>
      
    </div>
  )
}

export default Authorfooter