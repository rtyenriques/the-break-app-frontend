import React from 'react'
// import { Redirect } from 'react-router-dom'
import ArticlesContainer from '../containers/ArticlesContainer'

const Category = (props) => {

// let category = props.categories[props.match.params.id - 1]
// if want to filter :id by appropriate id not order

let category = props.categories.filter(category => category.id == props.match.params.id)[0]
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