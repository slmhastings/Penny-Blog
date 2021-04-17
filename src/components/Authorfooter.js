import React from 'react'



function Authorfooter() {
  return (
    <div class="author-footer">
      <div>
        <div className="author-bio" style={{
          fontFamily: "Harmattan"
        }}>
          <p>Written by Crissi Cole and Rebeca Menini.</p>
          <p>Crissi is the founder and CEO of Penny Finance. Rebeca is lead copywriter for Penny Finance.</p>
          <p>Penny is the first personalized, tech-powered financial mentor that provides real-world financial education</p>
          <p>and know-how to women at the starting line of their financial lives.
          </p>
        </div>
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
