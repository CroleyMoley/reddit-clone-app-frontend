import React from 'react'

const ArticleCard = ({ article }) => {
    return (
        <p>{article.attributes.title}</p>
    )
}

export default ArticleCard