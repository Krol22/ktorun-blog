import React from "react";
import { graphql, Link } from "gatsby";

export default function Home({ data }) {
  const pages = data.allMarkdownRemark.nodes.map(({ frontmatter }) => ({...frontmatter}));

  return (
    <div>
      <h1>Hello!</h1>
      <ul>
        {pages.map(({ title, slug, date }) => <Link to={slug}><li>{title}</li></Link>)}
      </ul>
    </div>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`;
