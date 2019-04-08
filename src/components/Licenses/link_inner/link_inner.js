import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkInnerDiv = styled.div`
  text-align: right;
`;

const propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkInner(props) {
  const { children } = props;
  return (
    <LinkInnerDiv>
      {children}
    </LinkInnerDiv>
  );
}

LinkInner.propTypes = propTypes;

export default LinkInner;
