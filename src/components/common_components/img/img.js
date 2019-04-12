import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';

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
  const modal = document.querySelector('.modal');
  document.body.classList.add('modal__modal-open');
  modal.classList.remove('modal__unactive');
  modal.classList.add('modal__active');
}

function Img(props) {
  const { imgSrc } = props;
  const { imgAlt } = props;
  const { imgWidth } = props;
  const { imgHeight } = props;
  return (
    <Fragment>
      <ImgElement
        onClick={imgClick}
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
      />
      <Modal imgSrc={imgSrc} modalActiveClass="modal modal__active" />
    </Fragment>
  );
}

Img.propTypes = propTypes;
Img.defaultProps = defaultProps;

export default Img;
