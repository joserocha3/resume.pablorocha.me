import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({
  description, lang, meta, keywords, title,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            script={[{
              type: 'application/ld+json',
              innerHTML: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'Person',
                name: 'Jose Pablo Rocha, Jr.',
                image: 'https://pablorocha.me/headshot.jpg',
                jobTitle: 'Software Engineer',
                gender: 'male',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Edinburg',
                  addressRegion: 'TX',
                  postalCode: '78539',
                  addressCountry: 'United States',
                },
                email: 'hello@pablorocha.me',
                birthDate: '1984-08-16',
                alumniOf: 'University of Texas Pan American',
                birthPlace: 'Illinois',
                sameAs: [
                  'https://twitter.com/jprocha101',
                  'https://www.facebook.com/jprocha101',
                  'https://github.com/joserocha3',
                  'https://instagram.com/jprocha101',
                  'https://www.linkedin.com/in/jprocha101',
                ],
                url: 'https://pablorocha.me',
              }),
            }]}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:image',
                content: 'https://pablorocha.me/headshot.jpg',
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', '),
                  }
                  : [],
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
