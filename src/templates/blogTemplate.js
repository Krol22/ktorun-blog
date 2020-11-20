import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { date, title, category } = frontmatter;

  return (
    <Layout title={title}>
      <article>
        <nav className="post__bar">
          <div className="post__details">
            <div className="post__category">{category}</div>
            <div className="post__title">{title}</div>
          </div>
          <div className="post__added">Added: { date }</div>
        </nav>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
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
        category
      }
    }
  }
`;
