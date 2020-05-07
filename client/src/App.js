import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/main.scss';

//Components
import Navbar from './components/navbar/navbar';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Game from './components/pages/Game';

function App() {
  return (
    <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path ='/game' component={Game} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
