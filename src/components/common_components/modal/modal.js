import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalWrap from './modalWrap';

const ModalImg = styled.img`
  position: relative;
  z-index: 5;
  max-height: 95%;
  max-width: 70%;
`;

const ModalImgCloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 21;
  display: block;
  width: 42px;
  height: 42px;
  font-size: 0;
  background: rgba(255, 255, 255, 0.2) url("/img/popup/icon-cross.svg") center no-repeat;
  border: 0;
  border-radius: 2px;
  opacity: 0.6;
  
  :hover, :focus {
    background-color: rgba(255, 255, 255, 0.4);
    opacity: 1;
  }
  
  :active {
    transform: translateY(1px);
  }
`;

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

function Modal(props) {
  const { imgSrc } = props;
  const { isOpen } = props;
  const { onClose } = props;
  return (
    <ModalWrap>
      {
        isOpen
        && (
        <div className="modal__overlay">
          <ModalImg src={imgSrc} />
          <ModalImgCloseButton onClick={onClose} />
        </div>
        )
      }
    </ModalWrap>
  );
}

Modal.propTypes = propTypes;

export default Modal;
