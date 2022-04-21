import React from 'react'
import ArticlesContainer from '../containers/ArticlesContainer'




const Category = (props) => {
    const newNum = parseInt(props.match.params.id,10)
    const category = props.categories.filter(category => category.id === newNum)[0]
    console.log(category)

    const handleBack = () => {
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
        </div>
    )


}

export default Category
