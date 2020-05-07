import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './navbar/navbar';

import Home from './pages/home';
import Game from './pages/game';
import About from './pages/about';
import NoMatch from './pages/no-match';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/game' component={Game} />
              <Route exact path='/about-us' component={About} />
              <Route component={NoMatch} />
            </Switch>

          </div>
        </Router>
        
      </div>
    );
  }
}
