import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import PostList from "../components/PostList"

export default function Home({ data }) {
  const posts = data.allMdx.nodes.map(({ frontmatter }) => ({
    ...frontmatter,
  }))

  return (
    <Layout title="Blog">
      <AboutMe />
      <hr />
      <PostList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          pageTitle
          slug
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`
