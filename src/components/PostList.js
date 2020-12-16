import React, { useCallback } from "react"
import { navigate } from "gatsby"

const PostList = ({ posts }) => {
  const onPostClick = useCallback(slug => {
    navigate(slug)
  }, [])

  return (
    <ul className="post-list">
      {posts.map(({ pageTitle, slug, date, description }) => (
        <li key={slug} onClick={() => onPostClick(slug)}>
          <div className="post__bar">
            <div className="post__details">
              <div className="post__category">tech</div>
              <div className="post__title" to={slug}>
                {pageTitle}
              </div>
            </div>
            <div className="post__added">Added: {date}</div>
          </div>
          <p className="post__description">{description}</p>
        </li>
      ))}
    </ul>
  )
}

export default PostList
