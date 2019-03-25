import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './components/Body';
import HeaderWrap from './components/headerWrap/HeaderWrap';
import Footer from './components/footer/footer';

render(
    <Router>
      <Route path="/" component={Footer} />
    </Router>
  // <div>
  //   {HeaderWrapElement}
  //   {FooterWrapElement}
  // </div>
  ,
  document.getElementById('root')
);
