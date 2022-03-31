import React from 'react';
// import {connect} from 'react-redux'
// import {fetchCategories} from './actions/fetchCategories';
import CategoriesContainer from './containers/CategoriesContainer';
class App extends React.Component {

  // componentDidMount(){
  //   this.props.fetchCategories()
  // }

  render() {
    return (
      <div className="App">
        
        <CategoriesContainer/>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories
//   }
// }

// export default connect( )(App);
export default App;
