import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const email = data.site.siteMetadata.email
  const social = data.site.siteMetadata.social
  const wikis = data.site.siteMetadata.wikis

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <p>
        Kontaktinformationen finden Sie auf unseren Wiki-Seiten:
        <ul>
          <li>
            <a target="_blank" href={wikis.oer}>OER-Metadatengruppe</a>
          </li>
          <li>
            <a target="_blank" href={wikis.curricula}>Curricula-Gruppe</a>
          </li>
        </ul>
      </p>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        email
        social {
          github
        }
        wikis {
          oer
          curricula
        }
      }
    }
  }
`
