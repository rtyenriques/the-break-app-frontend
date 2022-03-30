import React from 'react';
import {connect} from 'react-redux'
import {fetchCategories} from './actions/fetchCategories';

class App extends React.Component {

  // componentDidMount(){
  //   this.props.fetchCategories()
  // }

  render() {
    return (
      <div className="App">
        APP
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories
//   }
// }

export default connect(null, {fetchCategories} )(App);
