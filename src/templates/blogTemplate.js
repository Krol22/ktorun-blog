import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"

import Code from "../components/mdx/Code"

const mdxComponents = {
  code: Code,
}

export default function Template({ data }) {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const { date, pageTitle, description } = frontmatter

  return (
    <Layout title={pageTitle}>
      <article>
        <div className="article__heading">
          <h3>{pageTitle}</h3>
          <p className="post__description">{description}</p>
          <div className="post__bar">
            <div className="post__category">tech</div>
            <div className="post__added">Added: {date}</div>
          </div>
        </div>
        <hr />
        <main className="article__content">
          <MDXProvider components={mdxComponents}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </main>
      </article>
    </Layout>
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
        description
      }
    }
  }
`
