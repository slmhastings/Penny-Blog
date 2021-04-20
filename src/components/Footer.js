import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

import { Helmet } from 'react-helmet'


const Footer = class extends React.Component {
    componentDidMount() {
     
      var sendMail = document.getElementById("send-mail");
      var userEmail = document.getElementById("user-email");
      var data = [
        {
          email: userEmail,
        },
      ];
      sendMail.addEventListener("click", function(){
        console.log(userEmail)
        fetch("https://blooming-peak-61082.herokuapp.com/https://penny-finance.com/klaviyo/add_subscriber?email="+userEmail.value)
        .then(res => res.json())
        .then(function(data){
          if(data.response.status == 200){
            userEmail.value = ""
          }
        })
        .catch(function(error) {
          console.log("ERROR:", error)
        });
        console.log(userEmail)
        
        
      })
    }
  render() {
    return (
      <footer id="footer">
        <div
          className="footer"
          style={{
            fontFamily: 'Harmattan',
          }}
        >
          <Helmet>
            <script type="application/javascript" async
            src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UAek8u"></script>
          </Helmet>
          <div className="container  has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <img src="/img/pennyfinanceicon.png"></img>
                    </li>
                    <br></br>
                    <li>
                      <p
                        style={{
                          padding: '8px 0px',
                          lineHeight: '23px',
                          color: '#F6F1F1',
                          fontSize: '24px',
                          fontWeight: 'bold',
                          textTransform: 'inherit',
                          fontFamily: 'Harmattan',
                          margin: '-11px 7px 16px',
                          padding: '8px 0px',
                          width: '84%',
                        }}
                      >
                        We’re building the next generation of financial powerhouses — women on the rise, and in charge
                        of their own futures.
                      </p>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3 ">
                <section>
                  <ul className="footer-link">
                    <li>
                      <Link to="https://penny-finance.com/quiz">Take our money quiz</Link>
                    </li>
                    <li>
                      <Link href="mailto:support@penny-finance.com" >Contact us</Link>
                    </li>
                    <li>
                      <Link to="https://penny-finance.com/privacy">Privacy policy</Link>
                    </li>
                    <li>
                      <Link to="https://penny-finance.com/terms">Terms of use</Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-5 social">
                <div class="subscribe footer-title">
                  <h4 class="mb-4">Money tips delivered to your inbox</h4>
                </div>
                <form>
                  <div class="form-group mb-0 email">
                    <input
                      type="email"
                      class="form-control"
                      id="user-email"
                      placeholder="Email address"
                    />
                    <i
                      class="fas fa-arrow-right"
                      id="send-mail"
                      style={{
                        color: 'F6F1F1',
                        opacity: '85%',
                      }}
                    ></i>
                  </div>
                </form>
                <br />
                <br />
                <div className="social">
                  <a title="facebook" href="https://www.facebook.com/getmoneyempowered">
                    <img src={facebook} alt="Facebook" style={{ width: '1em', height: '1em' }} />
                  </a>
                  <a title="linkedin" href="https://www.linkedin.com/company/69228895">
                    <img
                      className="fas fa-lg"
                      src="/img/linkedin.svg"
                      alt="Linkedin"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://www.instagram.com/startwithapenny">
                    <img src={instagram} alt="Instagram" style={{ width: '1em', height: '1em' }} />
                  </a>
                </div>
              </div>
            </div>
            <div class="row copyright-border">
              <div class="col-xl-9 col-lg-9 col-md-8 col">
                <p class="m-0 pt-3">© 2021 Penny Finance Inc. All Rights Reserved</p>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    )
  }
}

export default Footer
