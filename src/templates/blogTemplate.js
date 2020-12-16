import React, { useEffect, useRef } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { date, pageTitle, category } = frontmatter

  const articleRef = useRef()

  useEffect(() => {
    articleRef.current.querySelectorAll("pre").forEach(element => {})
  }, [articleRef])

  return (
    <Layout title={pageTitle}>
      <article>
        <nav className="post__bar">
          <div className="post__details">
            <div className="post__category">{category}</div>
            <div className="post__title">{pageTitle}</div>
          </div>
          <div className="post__added">Added: {date}</div>
        </nav>
        <main ref={articleRef}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
        <hr />
        <div className="port__suggested">
          <div>
            <Link to="/test-post">Post</Link>
            <Link to="/test-post2">Different post</Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        pageTitle
        category
      }
    }
  }
`
