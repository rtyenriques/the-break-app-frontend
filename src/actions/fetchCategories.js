export function fetchCategories() {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/categories')
        // , {
        //     method: 'GET'
        // })
            .then(response => response.json())
            .then(categories => dispatch({
                type: 'FETCH_CATEGORIES',
                payload: categories
            }))
    }
}

// dispatch(actionObject)