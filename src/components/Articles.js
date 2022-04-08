import React from "react";

const Articles = (props) => {
    
    return(
        <div>
          
            {props.articles && props.articles.map(article =>
                <li key={article.id}>
                   {article.title} - {article.body}
                </li>
                )}
        </div>
    )

}

export default Articles