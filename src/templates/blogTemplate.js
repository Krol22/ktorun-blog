import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"

export default function Template({ data }) {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const { date, pageTitle, category } = frontmatter

  return (
    <Layout title={pageTitle}>
      <article>
        {/*
        <nav className="post__bar">
          <div className="post__details">
            <div className="post__category">{category}</div>
            <div className="post__title">{pageTitle}</div>
          </div>
          <div className="post__added">Added: {date}</div>
        </nav>
        */}
        <main>
          <MDXRenderer>{body}</MDXRenderer>
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
      }
    }
  }
`
