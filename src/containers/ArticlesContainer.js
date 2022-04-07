import React from "react";
import ArticleInput  from "../components/ArticleInput";
import Articles from "../components/Articles";

class ArticlesContainer extends React.Component {



  render() {
      return(
          <div>
        
                <ArticleInput/>
                <Articles articles={this.props.category && this.props.category.articles}/>
          </div>
      )
  }



}

export default ArticlesContainer