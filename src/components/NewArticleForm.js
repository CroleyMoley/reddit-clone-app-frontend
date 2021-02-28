import React from 'react'
import { updateNewArticleForm } from '../actions/newArticleForm'
import { connect } from 'react-redux'

const NewArticleForm = ({ subreddit, title, url, viewcount, thumbnail }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        updateNewArticleForm(name, value)
    }

    const handleSubmit = event => event.preventDefault()

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="subreddit" name="subreddit" onChange={handleChange} value={subreddit}></input>
        </form>
    )
}

const mapStateToProps = state => {
    const { subreddit, title, url, viewcount, thumbnail } = state.newArticleForm
    return{
        subreddit,
        title,
        url,
        viewcount,
        thumbnail
    }
}

export default connect(mapStateToProps, { updateNewArticleForm })(NewArticleForm)