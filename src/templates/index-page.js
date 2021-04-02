import React from 'react'
import Layout from '/src/components/Layout.js'
import BlogRoll from '/src/components/BlogRoll.js'
import Scroller from '../components/Scroller'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <script src="https://kit.fontawesome.com/af3bcee49a.js" crossorigin="anonymous"></script>
          <script type="application/javascript" async
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UAek8u"></script>
          

        </Helmet>
        <div className="full-width-image-container margin-top-0">
          <img className="full-width-image" src="/img/theblogbanner.png"></img>
        </div>
        <div>
          <section
            className="section"
            style={{
              padding: '3rem 1.5rem',
              width: '100%'
            }}
          >
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </div>
        <Scroller />
        <Footer />
        
      </Layout>
    )
  }
}
