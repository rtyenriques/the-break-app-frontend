export const deleteArticle = (articleId, categoryId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/categories/${categoryId}/articles/${articleId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(category => dispatch({ type: 'DELETE_ARTICLE', payload: category }))

    }
}

