import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"

const MyAhref = props => (
  <a target="_blank" rel="noopener noreferrer" href={props.href}>
    {props.children}
  </a>
)

const components = {
  a: MyAhref,
}

export default function Template({ data }) {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const { date, pageTitle, category } = frontmatter

  return (
    <MDXProvider components={components}>
      <Layout title={pageTitle}>
        <article>
          <nav>
            <h1 className="post__title">{pageTitle}</h1>
            <div className="post__bar">
              <div className="post__category">{category}</div>
              <div className="post__added">Added: {date}</div>
            </div>
          </nav>
          <main>
            <MDXRenderer>{body}</MDXRenderer>
          </main>
        </article>
        <Newsletter />
      </Layout>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        pageTitle
        category
      }
    }
  }
`
