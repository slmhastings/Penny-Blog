import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { markdownRemark: post } = data

    return (
      <div className="columns is-multiline" >
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div
                  style={{
                    minWidth: 'auto'
                  }}
                >
                  {post.frontmatter.featuredimage ? (
                    <div
                      className="featuredthumbnail"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '0',
                      }}
                    >
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </div>

                <header>
                  <div className="header-contents">
                    <p
                      className="post-meta"
                      style={{
                        fontFamily: 'Harmattan',
                      }}
                    >
                      <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> </span>
                      <span className="subtitle is-size-5 is-block">{post.frontmatter.date}</span>
                    </p>
                    <div style={{
                      width: "100%", 
                      overflow: "hidden", 
                      textOverflow: "ellipsis",
                      bottom: "-33px"
                      
                    }}>
                    <span
                      style={{
                        fontFamily: 'Harmattan',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        position:'absolute'
                        
                      }}
                    >
                      {post.frontmatter.description}
                      <br />
                      <br />
                    </span>

                    </div>
                    <Link className="button" to={post.fields.slug}>
                        Keep Reading...
                    </Link>
                  </div>
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 150, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
