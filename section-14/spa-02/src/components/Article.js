import React from 'react'

const Article = ({title, author, text}) => {
  return (
    <article>
      <h2 className="title">{title}</h2>
      <h3 className="author">{author}</h3>
      <p className="text">{text}</p>
    </article>
  )
}

export default Article
