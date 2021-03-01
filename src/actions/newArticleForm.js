export const updateNewArticleForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_ARTICLE_FORM",
        formData
    }
}