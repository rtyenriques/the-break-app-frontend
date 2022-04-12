import React from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/deleteArticle";

const Articles = (props) => {

    const handleDelete = (article) => {

        props.deleteArticle(article.id, article.category_id)
    }

    return (
        <div>

            {props.articles && props.articles.map(article =>
                <li key={article.id}>
                    {article.title} - {article.body}
                    <button onClick={() => handleDelete(article)}>Delete</button>
                </li>
            )}
        </div>
    )

}

export default connect(null, { deleteArticle })(Articles)