import React from "react"

import Layout from '/src/components/Layout.js'
import BlogRoll from '/src/components/BlogRoll.js'
import Scroller from '../components/Scroller'




export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blogbanner1.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
        </div>
        <section className="section" style={{
          padding: '4rem'
        }}>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
        <Scroller />
      </Layout>
    )
  }
}
