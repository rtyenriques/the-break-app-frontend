import React from 'react'
import { Link, } from 'react-router-dom'
// import categoryReducer from '../reducers/categoryReducer'
// import Category from './Category'
import { connect } from 'react-redux'
import { deleteCategory } from '../actions/deleteCategory'
import { editCategory } from '../actions/editCategory'
// import CategoryEdit from './CategoryEdit'



const Categories = (props) => {


    const handleDelete = (category) => {
       
     props.deleteCategory(category.id)
  }
    
    const renderEdit = (category) => {
      
       let path = `/categories/${category.id}/edit`
       props.history.push(path, {state: category})
    }

    return (
        <div>
           <h1 className='header-title'>Categories</h1>
  
           <Link to='/categories/new'><button id='create-category-button'><b>Create a Category</b></button></Link>
           
           {props.categories.map(category => 
           <div key={category.id}>
               <br></br>
               <Link className='category-header' to={`categories/${category.id}`}><h4>{category.name}</h4></Link>
               {/* <Link to={`/categories/${category.id}/edit`}><button>edit</button></Link> */}
               <button onClick={() => renderEdit(category, props.categories)}>Edit</button>
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


export default connect(mapStateToProps, {deleteCategory, editCategory}) (Categories)