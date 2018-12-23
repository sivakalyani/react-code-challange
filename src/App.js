import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './Components/CarouselComponenet.js';
import './App.scss';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="app-body">
        <Route exact path="/" component={Header}/>
      </div>
    </Router>
    );
  }
}

export default App;
