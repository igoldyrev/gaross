import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import './components/Body';
import HeaderWrap from './components/headerWrap/HeaderWrap';
import Footer from './components/footer/footer';
import Main from './components/Main/Main';
import Licenses from './components/Licenses/Licenses';

render(
  <Router>
    <Route component={HeaderWrap} />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/licenses" component={Licenses} />
    </Switch>
    <Route component={Footer} />
  </Router>,
  document.getElementById('root'),
);
