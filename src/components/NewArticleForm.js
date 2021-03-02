import React from 'react'
import { updateNewArticleForm } from '../actions/newArticleForm'
import { connect } from 'react-redux'
import { createArticle } from '../actions/articles'

const NewArticleForm = ({ formData, updateNewArticleForm, createArticle, userId }) => {
    const { subreddit, title, url, content } = formData
    const handleChange = event => {
        const { name, value } = event.target
        updateNewArticleForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createArticle({
            ...formData,
            userId
        
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="subreddit" name="subreddit" onChange={handleChange} value={subreddit} />
            <input placeholder="title" name="title" onChange={handleChange} value={title} />
            <input placeholder="url" name="url" onChange={handleChange} value={url}/>
            <input placeholder="content" name="content" onChange={handleChange} value={content}/>
            <input type="submit" value="Create Article"/>
        </form>
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return{
        
        formData: state.newArticleForm,
        userId
    }
}

export default connect(mapStateToProps, { updateNewArticleForm, createArticle })(NewArticleForm)