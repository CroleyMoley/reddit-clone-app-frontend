import React from 'react'


const ArticleCard = ({ article }) => {
  return (
    
      <div className="ArticleCard">
        <div className="CardTitle">
            <h3>{article.attributes.title}</h3>
        </div>
        <div className="CardSubreddit">
            <p>{article.attributes.subreddit}</p>
        </div>
        <div className="CardContent">
            <p>{article.attributes.content}</p>
        </div>
      </div>
  )
}

export default ArticleCard