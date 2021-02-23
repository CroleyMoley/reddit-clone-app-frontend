import React from 'react'
import { connect } from 'react-redux'
import ArticleCard from './ArticleCard.js'

const Articles = props => {
    const articleCards = props.articles.length > 0 ?
    props.articles.map(a => <ArticleCard article={a} key={a.id}/>) :
    null

    return (
        articleCards
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Articles)
