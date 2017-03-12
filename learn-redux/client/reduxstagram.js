import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

// Import some CSS
import css from './styles/style.styl'

// Import Components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Import things from  react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path ='/' component={Main}>
      <IndexRoute component={PhotoGrid}/>
      <Route path='/view/:postId' component={Single}/>
    </Route>
  </Router>
)
render(router, document.getElementById('root'));
