import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  text: '',
  children: null,
};

function ListItem(props) {
  const { text } = props;
  const { children } = props;

  return (
    <li>
      { text }
      { children }
    </li>
  );
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
