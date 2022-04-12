export const deleteCategory = (categoryId) => {
  
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/categories/${categoryId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(category => dispatch({ type: 'DELETE_CATEGORY', payload: category }))

    }

}