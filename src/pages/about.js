import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to {data.site.siteMetadata.title}</p> 
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <li key={node.frontmatter.title}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </Layout>
  )
}

/*
				{data.allMarkdownRemark.edges.map(({node}) => (
          <p>KEY {node.frontmatter.title}</p>
        ))}
				{data.allMarkdownRemark.edges.map(post => (
					<li key={post.node.title}>
            <Link to="/page-2/">{post.node.title}</Link>
          </li>
        ))}
*/
