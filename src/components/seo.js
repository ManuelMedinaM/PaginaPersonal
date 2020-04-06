/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import useSeo from "../hooks/useSeo"

function SEO({lang}) {
 
  const { description, author, title } = useSeo();
  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Manuel Medina web`}
      link ={[
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Asap|Lato:700|Rubik&display=swap",
        },
        {
          rel: "stylesheet",
          href:"https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap",
        }
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    > <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
