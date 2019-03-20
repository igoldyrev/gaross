import React from 'react';
import { render } from 'react-dom';
import './components/Body';
import IndexText from './components/IndexText';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/Navigation';

const HeaderWrapElement = <Header />;
const FooterWrapElement = <Footer />;
const NavigationElement = <Navigation />;

render(
  <div>
    {HeaderWrapElement}
    {NavigationElement}
    {FooterWrapElement}
  </div>,
  document.getElementById('root')
);
