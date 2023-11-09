import * as React from "react"
import { Link } from "gatsby"
import { Tag } from "./tag"

export const PostList = ({ posts }) => {
  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <li key={post.fields.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
                {post.frontmatter?.authors && (
                  <small>
                    {` `}|{` `}
                    {post.frontmatter.authors.map((author, index) => {
                      return (
                        <span key={"author" + index}>
                          {author.firstname}
                          {` `}
                          {author.lastname}
                          {index < post.frontmatter.authors.length - 1
                            ? ",\u00A0"
                            : ""}
                        </span>
                      )
                    })}
                  </small>
                )}
                {post.frontmatter?.tags && (
                  <small>
                    {` | `}
                    {post.frontmatter.tags.map((tag, index) => (<Tag tag={tag} key={index} />))}
                  </small>
                )}
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        )
      })}
    </ol>
  )
}
