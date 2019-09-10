import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './style.css'

import Home from './views/index'
import Error404 from './views/404'
import Boilerplate from './components/boilerplate'
import FrontEnd from './views/front-end'
import BackEnd from './views/back-end' 
import Contact from './views/contact'
import Blog from './views/blog'
function App() {
  return (
    <Router>
      <Boilerplate> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/front-end" component={FrontEnd}/>
          <Route path="/back-end" component={BackEnd}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/error-404" component={Error404}/>
          <Redirect to="/error-404"/>
        </Switch>
      </Boilerplate>
    </Router>
  );
}

export default App;
