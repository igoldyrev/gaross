import React from 'react';
import { render } from 'react-dom';
import './components/Body';
import IndexText from './components/IndexText';
import Header from './components/header/Header';
import Footer from './components/footer/footer';

// const IndexTextElement = <IndexText text="ggdg" />;
const HeaderWrapElement = <Header />;
const FooterWrapElement = <Footer />;

render(
  <div>
    {HeaderWrapElement}
    {FooterWrapElement}
    {/* {IndexTextElement} */}
  </div>,
  document.getElementById('root')
);
