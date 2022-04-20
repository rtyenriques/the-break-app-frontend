import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/addCategory'
// import Categories from './Categories'

class CategoryInput extends React.Component {

    state = { name: '' }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCategory(this.state)
        this.setState({
            name: ''
        })
        this.props.history.push("/categories")


    }

    render() {
        return (
           
            <div className='category-form'>
       
                <h4>Create a Category</h4>
              
                <form onSubmit={this.handleSubmit}>
                    <label>Category Name:</label>
                    <input type='text'

                        placeholder='name'
                        value={this.state.name}
                        name='name'
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <input type='submit' />

                </form>
              
            </div>
        )
    }
}

export default connect(null, { addCategory })(CategoryInput);
