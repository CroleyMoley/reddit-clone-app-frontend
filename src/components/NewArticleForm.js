import React from 'react'
import { updateNewArticleForm } from '../actions/newArticleForm'
import { connect } from 'react-redux'

const NewArticleForm = ({ subreddit, title, url, content }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        updateNewArticleForm(name, value)
    }

    const handleSubmit = event => event.preventDefault()

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
    const { subreddit, title, url, content } = state.newArticleForm
    return{
        subreddit,
        title,
        url,
        content
    }
}

export default connect(mapStateToProps, { updateNewArticleForm })(NewArticleForm)