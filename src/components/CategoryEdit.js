
import React from 'react'
import { connect } from 'react-redux'
import { editCategory } from '../actions/editCategory'


class CategoryEdit extends React.Component {

    // state = ''
    constructor(props) {
        super(props);
        this.state =  ''
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        
        event.preventDefault()
       
        // this.props.match.params.id
        // this.props.category.id
        let category = { ...this.state, id:   this.props.match.params.id}
        this.props.editCategory(category)
        this.setState({
            name: ''
        })
        let path = `/categories/${this.props.match.params.id}`
        this.props.history.push(path, {state: category})
    }


    render() {
        return (
            <div className='category-edit'>
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

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}


export default connect(mapStateToProps, { editCategory })(CategoryEdit);
