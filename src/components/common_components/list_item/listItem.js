import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

function ListItem(props) {
  const { text } = props;

  return <li>{text}</li>;
}

ListItem.propTypes = propTypes;

export default ListItem;
