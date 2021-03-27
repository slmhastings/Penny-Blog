import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import pennyicon from '../../public/img/pennyfinanceicon.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered  has-text-white-ter" style={{fontFamily: 'Harmattan'}}>
          <div className="container  has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <img src={pennyicon}></img>
                    </li>
                    <li>
                    <p style={{
                      padding: '8px 0px',
                      lineHeight: '23px',
                      color: '#E2D2CF',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      textTransform: 'inherit',
                      fontFamily: 'Harmattan'
                    }}>We’re building the next generation of financial powerhouses — women on the rise, and in charge of their own futures.</p>
                    </li>
                    
                    
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list" style={{
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '20px',
                    lineHeight: '27px',
                    color: '#E2D2CF',
                    fontWeight: 'bold',
                    fontFamily: 'Harmattan'

                  }}>
                    <li>
                      <Link className="navbar-item" to="/quiz">
                        Take our money quiz
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/privacy">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/terms">
                        Terms of use
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
              <div class="subscribe footer-title">
              <h4 class="mb-4">Money tips delivered to your inbox</h4>
            </div>
            <form>
              <div class="form-group mb-0 email">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address"/>
                  <i class="fas fa-arrow-right" id="send-mail"></i>
              </div>
            </form>


                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

