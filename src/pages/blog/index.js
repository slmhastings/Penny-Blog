import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Subhead from '../../components/Subhead'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/header2.png')`,
          }}
        >
          <h1
            className="has-text-weight-bold"
            style={{
              
              boxShadow: '#f6f1f1 0.5rem 0px 0px, #f6f1f1 -0.5rem 0px 0px',
              color: '#637C76',
              padding: '1rem',
              textAlign: 'center',
              fontFamily: 'Hatton',
              fontSize: '6rem'
            }}
          >
            money makin' doesn't have to be so hard
          </h1>
        </div>
        <Subhead />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
