import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/main.scss';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Components
import Navbar from './components/navbar/navbar';
import Alert from './components/navbar/Alert';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Game from './components/pages/Game';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
