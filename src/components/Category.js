import React from 'react'
// import { Redirect } from 'react-router-dom'
import ArticlesContainer from '../containers/ArticlesContainer'

const Category = (props) => {

let category = props.categories[props.match.params.id - 1]
console.log(category)
    return(
        <div>
            <h2>
                {/* {category ? null : <Redirect to='/categories'/>} */}
               {category ? category.name : null}
            </h2>
            <ArticlesContainer category={category}/>
        </div>
    )


}

export default Category