import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//pages
import IndexPage from './pages/index';
import ProductsPage from './pages/products';
import ContactPage from './pages/contact';
import './css/general.css'
import './css/contact.css'

class App extends React.Component {


  render(){
  return (
    <Router >
      <Switch>
        {/* Switch is need because i have mutiple routes */}
     <Route exact path="/index.html" component={IndexPage} />
     <Route exact path="/products.html" component={ProductsPage} />
     <Route exact path="/contact.html" component={ContactPage} />
     </Switch>
    </Router>
  );
}
}

export default App;
