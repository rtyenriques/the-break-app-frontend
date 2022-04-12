
import React from 'react'
import { connect } from 'react-redux'
import { editCategory } from '../actions/editCategory'


class CategoryEdit extends React.Component {

    state = ''

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let category = { ...this.state, id: this.props.category.id }
        this.props.editCategory(category)
        this.setState({
            name: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Edit Category Name:</label>
                    <input type='text'

                        placeholder={this.props.name}
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


export default connect(null, { editCategory })(CategoryEdit);
