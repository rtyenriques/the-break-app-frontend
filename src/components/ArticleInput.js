import React from "react";
import { connect } from 'react-redux'
import { addArticle } from "../actions/addArticle";

class ArticleInput extends React.Component {

    state = {
        title: '',
        body: ''
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
            body: ''
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <h5>Create an Article</h5>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} /><br></br>
                    <label>Body</label>
                    <input type="textarea" name="body" value={this.state.body} onChange={this.handleChange} /><br></br>
                    {/* <textarea name="body" value={this.state.body} onChange={this.handleChange}  /> */}
                    <input type='submit' /><br></br>
                </form>
            </div>
        )
    }


}

export default connect(null, { addArticle })(ArticleInput)