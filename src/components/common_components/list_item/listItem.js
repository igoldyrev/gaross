import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

function ListItem({ text }) {
  return <li>{text}</li>;
}

ListItem.propTypes = propTypes;

export default ListItem;
