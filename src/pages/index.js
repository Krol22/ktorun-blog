import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PostList from "../components/PostList";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes.map(({ frontmatter }) => ({...frontmatter}));

  return (
    <Layout title="Blog">
      <PostList posts={posts}/>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`;
