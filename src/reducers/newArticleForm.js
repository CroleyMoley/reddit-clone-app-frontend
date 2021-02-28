const initialState = {
    subreddit: "",
    title: "",
    url: "",
    content: ""
  }
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_NEW_ARTICLE_FORM":
        return {
          ...state,
          [action.formData.name]: action.formData.value
        }
      case "RESET_NEW_ARTICLE_FORM":
        return initialState
      default:
        return state
    }
  }