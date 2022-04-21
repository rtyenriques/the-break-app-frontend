
import React from 'react'
import { connect } from 'react-redux'
import { editCategory } from '../actions/editCategory'

class CategoryEdit extends React.Component {
    
    category = this.props.categories.filter(category => category.id === parseInt(this.props.match.params.id,10))
    state = { name: this.category[0].name}

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let category = { ...this.state, id:   this.props.match.params.id}
        this.props.editCategory(category)
        let path = `/categories/${this.props.match.params.id}`
        this.props.history.push(path, {state: category})
    }


    render() {
        return (
            <div>
                
                <h1 className='header-title'>The Break App</h1>
                <form className='category-edit' onSubmit={this.handleSubmit}>
                    <h3>Edit Category</h3>
                    <label>Edit Category Name:</label>
                    <input type='text'
                        value={this.state.name}
                        name='name'
                        onChange={this.handleChange}
                    />
                {console.log(this.category[0].name)}
                    <br></br>
                    <input type='submit' />

                </form>
            </div>
        )
    }
}

export default connect(null, { editCategory })(CategoryEdit);
