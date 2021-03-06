import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={{
          height: 'auto',
          maxHeight: '300px',
          width: '100%',
          
          top: '0',
        }}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={{
          height: 'auto',
          maxHeight: '400px',
          minHeight: '400px',
          width: 'auto',
          minWidth: '400px',
          maxWidth: '400px',
          top: '0',
        }}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!image && typeof image === 'string')
    return (
      <img
        style={{
          height: 'auto',
          maxHeight: '400px',
          width: 'auto',
          maxWidth: '400px',
          top: '0',
        }}
        src={image}
        alt={alt}
      />
    )

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
