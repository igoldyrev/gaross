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

function imgClick() {
  const imgPopup = document.querySelector('.imgPopup');
  document.body.classList.add('imgPopup__modal-open');
  imgPopup.classList.remove('imgPopup__unactive');
  imgPopup.classList.add('imgPopup__active');
}

function Img(props) {
  const { imgSrc } = props;
  const { imgAlt } = props;
  const { imgWidth } = props;
  const { imgHeight } = props;
  return <ImgElement onClick={imgClick} src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />;
}

Img.propTypes = propTypes;
Img.defaultProps = defaultProps;

export default Img;
