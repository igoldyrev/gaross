import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HeaderWrap from './components/headerWrap/HeaderWrap';
import Footer from './components/footer/footer';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <Fragment>
      <HeaderWrap />
      {children}
      <Footer />
    </Fragment>
  );
}

App.propTypes = propTypes;

export default App;
