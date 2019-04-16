import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImgWrapDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const propTypes = {
  children: PropTypes.node.isRequired,
};

function ImgWrap(props) {
  const { children } = props;

  return (
    <ImgWrapDiv>
      { children }
    </ImgWrapDiv>
  );
}

ImgWrap.propTypes = propTypes;

export default ImgWrap;
