import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Authorfooter from '../components/Authorfooter'
import Scroller from '../components/Scroller'

import Footer from '../components/Footer'

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet }) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div>
        <Link to="/">
          <img
            src="/img/pennyfinanceicon.png"
            style={{
              height: 'auto',
              maxWidth: '20%',
              display: 'inline-block',
              verticalAlign: 'middle',
              transition: 'all 0.3s ease-out',
            }}
          ></img>
        </Link>
      </div>
      <div className="container content">
        <div
          className="columns"
          style={{
            margin: '10px',
          }}
        >
          <div
            className="column is-10 is-offset-1"
            style={{
              fontFamily: 'Harmattan',
              fontSize: '20px',
            }}
          >
            <h1 className="title  has-text-weight-bold is-bold-light" style={{
              fontSize:"3.5rem"
            }}>{title}</h1>

            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        // featuredimage={post.frontmatter.featuredimage}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
            <script
              type="text/javascript"
              src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6053ebc2c1ceb6a9"
            ></script>
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <Scroller />
      <Authorfooter />
      <Footer />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        
        description
        tags
      }
    }
  }
`
