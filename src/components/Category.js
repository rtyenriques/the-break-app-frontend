import React from 'react'
import ArticlesContainer from '../containers/ArticlesContainer'
// import CategoryEdit from './CategoryEdit'



const Category = (props) => {


    // let category = props.categories[props.match.params.id - 1]
    // if want to filter :id by appropriate id not order
    // debugger
    const newNum = parseInt(props.match.params.id,10)
    const category = props.categories.filter(category => category.id === newNum)[0]
    console.log(category)

    const handleBack = () => {
        // props.history.goBack()
        let path = '/categories'
        props.history.push(path)
    }

    return (
        <div>
            <h1 className='header-title'>
                {category ? category.name : null}
            </h1>
            <button onClick={handleBack}><b>Back to All</b></button>
            <ArticlesContainer category={category} />
            {/* <CategoryEdit category={category} /> */}

        </div>
    )


}

export default Category
