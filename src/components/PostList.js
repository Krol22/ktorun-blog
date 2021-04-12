import React, { useCallback } from "react"
import { navigate } from "gatsby"

const PostList = ({ posts }) => {
  const onPostClick = useCallback(slug => {
    navigate(slug)
  }, [])

  return (
    <div className="post-section">
      <h2>Latest articles:</h2>
      <ul className="post-list">
        {posts.map(({ pageTitle, slug, date, description, category }) => (
          <li className="post" onClick={() => onPostClick(slug)} key={slug}>
            <h3>{pageTitle}</h3>
            <p className="post__description">{description}</p>
            <p className="post__link">Read more -&gt;</p>
            <div className="post__bar">
              <div className="post__category">{category}</div>
              <div className="post__added">Added: {date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
