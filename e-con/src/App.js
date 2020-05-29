import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//pages
import Indexpage from './pages/index'
import './css/general.css'

class App extends React.Component {


  render(){
  return (
    <Router exact path="/" component={Indexpage}>
     
    </Router>
  );
}
}

export default App;
