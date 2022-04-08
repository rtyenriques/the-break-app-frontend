export const addArticle = (article, categoryId) => {

return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/categories/${categoryId}/articles`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    })
    .then(response => response.json())
    .then(category => dispatch({type: 'ADD_ARTICLE', payload: category}))
}

}