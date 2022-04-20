import React from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/deleteArticle";

const Articles = (props) => {

    const handleDelete = (article) => {

        props.deleteArticle(article.id, article.category_id)
    }

    return (
        <div>
            <br></br>
            <h2>Articles</h2><br></br>
            {props.articles && props.articles.map(article =>
                <article key={article.id}>
                    <h3>{article.title}</h3> 
                    <h4>By:{article.author}</h4>
                    <img alt= '' src={article.image}/>
                    <p>{article.body} </p>
                    
                    <button onClick={() => handleDelete(article)}>Delete</button>
                </article>
            )} 

        </div>
    )

}

export default connect(null, { deleteArticle })(Articles)