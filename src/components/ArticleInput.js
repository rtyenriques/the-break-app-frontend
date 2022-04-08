import React from "react";
import {connect} from 'react-redux'
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
        title:'',
        body:''
    })
}

render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                <label>Body</label>
                <input type='text' name="body" value={this.state.body} onChange={this.handleChange}/>
                
                <input type='submit'/>
            </form>
        </div>
    )
}


}

export default connect(null, {addArticle})(ArticleInput)