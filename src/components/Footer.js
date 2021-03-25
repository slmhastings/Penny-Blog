import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 text-left text-xl-left text-lg-left text-md-left text-sm-left">
            {/* <%=image_tag("logo.png")%> */}
              <p class="footer-para mt-1 gray-2">
              We’re building the next generation of financial powerhouses — women on the rise, and in charge of their own futures. 
              </p>
            </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="subscribe footer-title">
              <h4 class="mb-4">support</h4>
            </div>
            <ul class="footer-link">
              <li>
                <a href="/quiz"> Take our money quiz </a>
              </li>
              <li>
                <a href="#"> Contact us </a>
              </li>
              <li>
                <a href="/privacy"> Privacy policy  </a>
              </li>
               <li>
                <a href="/terms"> Terms of use </a>
              </li>
            </ul>
          </div>


          <div class="col-lg-4 col-md-4 col-sm-6 col-6">
            <div class="subscribe footer-title">
              <h4 class="mb-4">Money tips delivered to your inbox</h4>
            </div>
           <p class="far-away text-left">Far far away, behind the word mountains, far from the countries.</p> 
           <form>
            <div class="form-group mb-0 email">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address"></input>
              <i class="fas fa-arrow-right" id="send-mail"></i>
            </div>
          </form>
         
            <ul class="footer-social pt-5 pb-4 pb-xl-0 pb-lg-0 pb-md-0 social-network">
              <li>
                <a href="https://www.instagram.com/startwithapenny" target="_blank">
                  <i class="fa fa-instagram" title="Instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/69228895" target="_blank">
                  <i class="fab fa-linkedin-in" title="Linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/getmoneyempowered" target="_blank">
                  <i class="fab fa-facebook" title="Facebook"></i>
                </a>
              </li>
              
            </ul>
        
          <p class="text-center join-us">join us</p>
          </div>
        </div>


        <div class="row copyright-border">
          <div class="col-xl-9 col-lg-9 col-md-8 col">
            <p class="m-0 pt-3">© 2021 Penny Finance Inc. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>

    )
  }
}

export default Footer
