import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose';
import './style.css'

import Home from './views/index'
import Error404 from './views/404'
import Boilerplate from './components/boilerplate'
import FrontEnd from './views/front-end'
import BackEnd from './views/back-end' 
import Contact from './views/contact'
import Articles from './views/articles'
const RouteContainer = posed.div({
  enter: { y: 0, opacity:1, delay: 100, beforeChildren: true },
  exit: { y: -100, opacity:0,
    transition: {y:({from,to})=>(
      { type: 'keyframes', values: [from, 100], times: [0, 1], duration: 300 })
    }}
});

const App = () => (
    <Route render={({ location }) => (
      <Boilerplate>
        <PoseGroup>
        <RouteContainer id="main" key={location.pathname}>
        <Switch location={location}>
          <Route exact path="/" component={Home}/>
          <Route path="/front-end" component={FrontEnd}/>
          <Route path="/back-end" component={BackEnd}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/articles" component={Articles}/>
          <Route path="/error-404" component={Error404}/>
          <Redirect to="/error-404"/>
        </Switch>
        </RouteContainer>
        </PoseGroup>
      </Boilerplate>
    )}/>
)

ReactDOM.render(<Router basename='/'><App /></Router>, document.getElementById('root'))
