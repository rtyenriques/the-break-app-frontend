export default function categoryReducer(state = { categories: [] }, action) {

    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return { categories: action.payload }
        case 'ADD_ACCOUNT':
            return { ...state, categories: [...state.categories, action.payload] }
        case 'ADD_ARTICLE':
             let categories = state.categories.map(category => {
                if (category.id === action.payload.id) {
                    return action.payload
                } else {
                    return category
                }

            })
       
            return { ...state, categories: categories }
        case 'DELETE_ARTICLE':
            let categoriesTwo = state.categories.map(category => {
                if (category.id === action.payload.id) {
                    return action.payload
                } else {
                    return category
                }

            })
            return { ...state, categories: categoriesTwo }
        case 'EDIT_CATEGORY':
            let categoriesThree = state.categories.map(category => {
                if (category.id === action.payload.id) {
                    return action.payload
                } else {
                    return category
                }

            })
            return { ...state, categories: categoriesThree }
        case 'DELETE_CATEGORY':
            return { ...state, categories: action.payload }
        default:
            return state
    }
}