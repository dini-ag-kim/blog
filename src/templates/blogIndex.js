import * as React from "react"
import { graphql } from "gatsby"
import { PostList } from "../components/postList"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { stringToColor } from "../common"

const BlogIndex = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = pageContext.posts

  if (posts.length === 0) {
    return (
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`All posts tagged with ${pageContext.tag}`} />
      <p>Alle Posts mit Tag <span className="chip" style={{ backgroundColor: stringToColor(pageContext.tag) }}>{pageContext.tag}</span></p>
      <PostList posts={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogPostBySlug {
    site {
      siteMetadata {
        title
      }
    }
  }
`

