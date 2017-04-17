import React from 'react';
import { Route } from 'react-router-dom';

import ProjectList from '../projects/ProjectList';

import PageWithNav from './PageWithNav';

const Code = ({ projects }) => {
  return (
    <PageWithNav>
      <Route exact path='/' component={ ProjectList } />
      <Route path='/:project' component={ ProjectList } />
    </PageWithNav>
  )
};

export default Code;
