import React from 'react';
import { render } from 'react-dom';
import './components/Body';
import HeaderWrap from './components/headerWrap/HeaderWrap';
import Footer from './components/footer/footer';

const HeaderWrapElement = <HeaderWrap />;
const FooterWrapElement = <Footer />;

render(
  <div>
    {HeaderWrapElement}
    {FooterWrapElement}
  </div>,
  document.getElementById('root')
);
