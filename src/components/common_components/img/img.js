import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImgElement = styled.img`
  margin: 0 5px 15px;
  cursor: pointer;
`;

const propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

function Img(props) {
  const { imgSrc } = props;
  const { imgAlt } = props;
  return <ImgElement src={imgSrc} alt={imgAlt} />;
}

Img.propTypes = propTypes;

export default Img;
