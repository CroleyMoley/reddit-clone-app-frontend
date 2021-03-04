import { resetNewArticleForm } from './newArticleForm.js'

export const setArticles = articles => {
    return {
        type: "SET_ARTICLES",
        articles
    }
}

export const clearArticles = () => {
    return{
        type: "CLEAR_ARTICLES"
    }
}

export const getArticles = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/articles", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                console.log(response.data)
                dispatch(setArticles(response.data))
            }
        })
        .catch(console.log)
    }
}

export const addArticle = article => {
    return {
        type: "ADD_ARTICLE",
        article 
    }
}

export const createArticle = ( articleData, history ) => {
    return dispatch => {
        const sendableArticleData = {
            subreddit: articleData.subreddit,
            title: articleData.title,
            url: articleData.url,
            content: articleData.content,
            userId: articleData.userId
        }

        return fetch("http://localhost:3001/api/v1/articles", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableArticleData)
        })
        .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addArticle(resp.data))
          dispatch(resetNewArticleForm())
          history.push(`/articles`)
        }
    })
        
    }
}
