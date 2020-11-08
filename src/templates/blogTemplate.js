import React from "react";
import { graphql, Link } from "gatsby";

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/">go back</Link>
    </>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
