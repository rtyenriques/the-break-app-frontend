import React from "react";
import { connect } from 'react-redux'
import { addArticle } from "../actions/addArticle";

class ArticleInput extends React.Component {

    state = {
        title: '',
        body: '',
        author:'',
        image:''
        }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault()
        this.props.addArticle(this.state, this.props.category.id)
        this.setState({
            title: '',
            body: '',
            author: '',
            image: ''
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <h2>Create an Article</h2>
                <form className="article-form" onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} /><br></br>
                    <label>Body:</label>
                    <textarea name="body" value={this.state.body} onChange={this.handleChange} /><br></br>
                    <label>Author:</label>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChange} /><br></br>
                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /><br></br>
                    <input type='submit' /><br></br>
                </form>
            </div>
        )
    }


}

export default connect(null, { addArticle })(ArticleInput)