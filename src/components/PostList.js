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
        {posts.map(({ pageTitle, slug, date, description }) => (
          <li key={slug}>
            <h3 onClick={() => onPostClick(slug)}>{pageTitle}</h3>
            <p className="post__description">{description}</p>
            <div className="post__bar">
              <div className="post__category">tech</div>
              <div className="post__added">Added: {date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
