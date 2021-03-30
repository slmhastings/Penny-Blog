import React from 'react'
import {} from 'react-helmet'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="full-width-image-container margin-top-0">
          {/* <img className="full-width-image" src="/img/blogbanner1.png"></img> */}
        </div>
        <section className="section">
          <div className="container" >
            <div className="content" style={{
            display: "grid",
            justifyContent: "center",
            marginRight: "0"
          }}>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
