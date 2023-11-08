/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            github
          }
          description
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const description = data.site.siteMetadata?.description
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        src="../images/dini-ag-kim.png"
        width={50}
        height={50}
        placeholder="blurred"
        alt="DINI-AG-KIM logo"
      />
      {author?.name && (
        <div>
          <p>
            {description}
            {` `}
            Dieser Blog wird von der <strong>{author.name}</strong> betreut.
          </p>
          <p>
            <a
              href={`https://github.com/${social?.github || ``}`}
              style={{
                fontSize: `1.75em`,
                padding: `0em 0.2em`,
                color: `#000`,
                boxShadow: `none`,
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
