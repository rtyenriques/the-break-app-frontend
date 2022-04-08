import React from 'react'
import { Link } from 'react-router-dom'
// import categoryReducer from '../reducers/categoryReducer'
// import Category from './Category'


const Categories = (props) => {

    return (
        <div>
           <h1>Categories</h1>
  
           
           {props.categories.map(category => 
           <div key={category.id}>
               <Link to={`${category.id}`}>{category.name}</Link>
            </div>
           )}
           
        </div>
    )
}

export default Categories