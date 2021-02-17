import React from 'react';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {

  return (
    <div className="app">
      <Router>
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
