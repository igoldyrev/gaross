import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HeaderWrap from './components/headerWrap/HeaderWrap';
import Footer from './components/footer/footer';
import ModalWrap from './components/common_components/modal/modalWrap';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <Fragment>
      <HeaderWrap />
      {children}
      <Footer />
      <ModalWrap />
    </Fragment>
  );
}

App.propTypes = propTypes;

export default App;
