import React from 'react'
import authorfooter from '../../static/img/authorfooter.png'

function Authorfooter() {
  return (
    <div class="author-footer"
      style={{
        width: '100%'
      }}>
      <div>
        <img
          style={{
            margin: '0px',
            maxWidth: '88%',
            marginTop: '-29px',
          }}
          src={authorfooter}
        />
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
