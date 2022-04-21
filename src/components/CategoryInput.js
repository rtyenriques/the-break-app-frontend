import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/addCategory'

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
        this.props.history.push("/categories")
     }

    render() {
        return (

            <div>
                <h1 className='header-title'>The Break App</h1>
                <form className='category-form' onSubmit={this.handleSubmit}>
                    <h3>Create a Category</h3>
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
