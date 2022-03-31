import React from 'react'

const Categories = (props) => {

    return (
        <div>
           <h1>Categories</h1>
  
           
           {props.categories.map(c => <li key={c.id}>{c.name}</li>
           )}
            
        </div>
    )
}

export default Categories