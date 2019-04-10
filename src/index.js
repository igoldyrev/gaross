import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import './components/Body';
import HeaderWrap from './components/headerWrap/HeaderWrap';
import Footer from './components/footer/footer';
import Main from './components/Main/Main';
import Licenses from './components/Licenses/Licenses';
import ImgPopup from './components/common_components/img_popup/imgPopup';
import Orders from './components/Orders/Orders';
import Letters from './components/Letters/Letters';

render(
  <Router>
    <Route component={HeaderWrap} />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/licenses" component={Licenses} />
      <Route path="/orders" component={Orders} />
      <Route path="/letters" component={Letters} />
    </Switch>
    <Route component={Footer} />
    <Route component={ImgPopup} />
  </Router>,
  document.getElementById('root'),
);
