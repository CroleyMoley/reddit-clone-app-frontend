export default (state = [], action) => {
    switch (action.type) {
        case "SET_ARTICLES":
            return action.articles
        case "CLEAR_ARTICLES":
            return []
        default: 
            return state
    }
}