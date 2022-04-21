import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoriesContainer from './containers/CategoriesContainer';
import Homepage from './components/Homepage';
import { About } from './components/About';
import Navbar from './navigation/navbar';
import { Title } from './components/Title';
import { Contact } from './components/Contact';
import './css/styles.css';



class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Title />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <CategoriesContainer />
      </div>
    );
  }
}

export default App;
