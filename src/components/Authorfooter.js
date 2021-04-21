import React from 'react'



function Authorfooter() {
  return (
    <div className="author-footer">
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
        className="main-button"
        style={{
          padding: '25px',
        }}
      >
        <a className="courses" href="https://penny-finance.com/">
          <img src="/img/app-button.jpg" style={{
            width: "25vh"
          }}></img>
        </a>
      </div>
    </div>
  )
}

export default Authorfooter
