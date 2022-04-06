import React from 'react'
import Category from './Category'


const Categories = (props) => {

    return (
        <div>
           <h1>Categories</h1>
  
           
           {props.categories.map(c => 
           <div key={c.id}><Category category={c} /></div>
           )}
           
        </div>
    )
}

export default Categories