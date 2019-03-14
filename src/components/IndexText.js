import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

function IndexText({ text }) {
  return <div>{text}</div>;
}

IndexText.propTypes = propTypes;

export default IndexText;
