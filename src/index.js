import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './css/style.css'

import Home from './views/index'
import Error404 from './views/404'
import Boilerplate from './components/boilerplate'
import Skills from './views/skills'
import Personal from './views/personal' 
import Contact from './views/contact'
import Articles from './views/articles'

function App () {
  return (
    <Router>
      <Boilerplate> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/personal" component={Personal}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/articles" component={Articles}/>
          <Route path="/error-404" component={Error404}/>
          <Redirect to="/error-404"/>
        </Switch>
      </Boilerplate>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
