export const updateNewArticleForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_NEW_ARTICLE_FORM",
        formData: {name, value}
    }
}