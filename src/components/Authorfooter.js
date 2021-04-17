import React from 'react'
import authorfooter from '../../static/img/authorfooter.png'


function Authorfooter() {
  return (
    <div class="author-footer">
      <div>
        <img src="/img/authorfooter-mobile.svg" style={{
          width: "74vh"
        }}></img>
      </div>
      <div
        class="main-button"
        style={{
          padding: '25px',
        }}
      >
        <a class="courses" href="https://penny-finance.com/">
          take me to the app
        </a>
      </div>
    </div>
  )
}

export default Authorfooter
