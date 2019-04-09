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
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
};

const defaultProps = {
  imgWidth: '100%',
  imgHeight: 'auto',
};

function Img(props) {
  const { imgSrc } = props;
  const { imgAlt } = props;
  const { imgWidth } = props;
  const { imgHeight } = props;
  return <ImgElement src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />;
}

Img.propTypes = propTypes;
Img.defaultProps = defaultProps;

export default Img;
