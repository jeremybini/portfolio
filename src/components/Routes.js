import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Code from './pages/Code';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Photos from './pages/Photos';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Switch>
        <Route exact path="/code" component={ Code } />
        <Route path="/photos" component={ Photos } />
        <Route path="/video" component={ NotFound } />
        <Route component={ NotFound } />
      </Switch>
    </Switch>
  </Router>
);

export default Routes;
