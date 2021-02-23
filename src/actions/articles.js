export const setArticles = articles => {
    return {
        type: "SET_ARTICLES",
        articles
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

export default articles