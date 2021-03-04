const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_ARTICLES":
            return action.articles
        case "ADD_ARTICLE":
            return state.concat(action.article)
        case "CLEAR_ARTICLES":
            return initialState

        default: 
            return state
    }
}