import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import PageWithNav from './containers/PageWithNav'
import Home from './views/home/Home'
import NotFound from './views/notFound/NotFound'
import Photos from './views/photos/Photos'
import Project from './views/project/Project'
import Projects from './views/projects/Projects'
import Videos from './views/videos/Videos'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <PageWithNav>
        <Switch>
          <Route exact path='/code' component={ Projects } />
          <Route path='/code/:project' component={ Project } />
          <Route path='/photos' component={ Photos } />
          <Route path='/video' component={ Videos } />
          <Route component={ NotFound } />
        </Switch>
      </PageWithNav>
    </Switch>
  </Router>
)

export default Routes
