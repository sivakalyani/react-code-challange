import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Headlines from './Components/HeadlinesComponent.js';

import './App.scss';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Headlines}/>
      </div>
    </Router>
    );
  }
}

export default App;
