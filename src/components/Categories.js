import React from 'react'
import { Link, } from 'react-router-dom'
// import categoryReducer from '../reducers/categoryReducer'
// import Category from './Category'
import { connect } from 'react-redux'
import { deleteCategory } from '../actions/deleteCategory'



const Categories = (props) => {


    const handleDelete = (category) => {
       
     props.deleteCategory(category.id)
  }
    

    return (
        <div>
           <h1>Categories</h1>
  
           <Link to='/categories/new'><button id='create-category-button'>create new category</button></Link>
           
           {props.categories.map(category => 
           <div key={category.id}>
               
               <Link to={`categories/${category.id}`}><h4>{category.name}</h4></Link>
               <Link to={`/categories/${category.id}/edit`}><button>edit</button></Link>
               <button onClick={() => handleDelete(category, props.categories)}>Delete</button>
            </div>
           )}
           
        </div>
    )

    
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}


export default connect(mapStateToProps, {deleteCategory}) (Categories)