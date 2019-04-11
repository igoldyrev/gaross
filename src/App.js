import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HeaderWrap from './components/headerWrap/HeaderWrap';
import Footer from './components/footer/footer';
import ImgPopupPortal from './components/common_components/img_popup/imgPopupPortal';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <Fragment>
      <HeaderWrap />
      {children}
      <Footer />
      <ImgPopupPortal />
    </Fragment>
  );
}

App.propTypes = propTypes;

export default App;
