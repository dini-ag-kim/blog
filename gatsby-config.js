module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Blog der DINI-AG-KIM`,
    author: {
      name: `DINI-AG-KIM`,
    },
    description: `Ein Blog der DINI-AG-KIM`,
    siteUrl: `https://dini-ag-kim.github.io/blog/`,
    email: `dini-ag-kim-curricula@lists.dnb.de`,
    social: {
      github: `dini-ag-kim`,
    },
    wikis: {
      oer: `https://wiki.dnb.de/display/DINIAGKIM/OER-Metadatengruppe`,
      curricula: `https://wiki.dnb.de/display/DINIAGKIM/Curricula-Gruppe`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://www.curricula-gruppe.de/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: {date: DESC}}) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "DINI-AG-KIM Blog's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog der Curricula-Gruppe`,
        short_name: `Curricula Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#26c884`,
        display: `minimal-ui`,
        icon: `src/images/dini-ag-kim.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
