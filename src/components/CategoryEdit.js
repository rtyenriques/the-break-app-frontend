
import React from 'react'
import { connect } from 'react-redux'
import { editCategory } from '../actions/editCategory'

class CategoryEdit extends React.Component {
    
    // newNum = parseInt(this.props.match.params.id,10)
    // category = this.props.categories.filter(category => category.id === newNum)[0]

    category = this.props.categories.filter(category => category.id === parseInt(this.props.match.params.id,10))
    state = { name: this.category[0].name}

    // category = () => {
    //     this.props.categories.filter(category => category.id == this.props.match.params.id)
    //     return new
    // }
    // constructor(props) {
    //     super(props);
    //     this.state =  ''
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
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
        // this.setState({
        //     name: ''
        // })
        let path = `/categories/${this.props.match.params.id}`
        this.props.history.push(path, {state: category})
    }


    render() {
        return (
            <div>
                <h1 className='header-title'>The Break App</h1>
                <form className='category-edit' onSubmit={this.handleSubmit}>
                    <label>Edit Category Name:</label>
                    <input type='text'

                        // placeholder={this.props.mapStateToProps}
                        value={this.state.name}
                        name='name'
                        onChange={this.handleChange}
                    />
                {console.log(this.category[0].name)}
                    {/* {console.log(this.props.categories.filter(category => category.id == this.props.match.params.id))} */}
                    <br></br>
                    <input type='submit' />

                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => {

//     return {
//         categories: state.categories
//     }
// }


export default connect(null, { editCategory })(CategoryEdit);
