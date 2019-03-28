import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './components/Body';
import HeaderWrap from './components/headerWrap/HeaderWrap';
import Footer from './components/footer/footer';
import Main from "./components/Main/Main";

render(
  <Router>
    <Route component={HeaderWrap} />
    <Route path={'/'} component={Main} />
    <Route component={Footer}/>
  </Router>,
  document.getElementById('root')
);
