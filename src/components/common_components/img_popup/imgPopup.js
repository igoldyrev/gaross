import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { variables } from '../../variables';

const ImgPopupDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const ImgButtonDiv = styled.div`
  position: relative;
  top: 0;
  z-index: 20;
  width: 50%;
  height: 100%;
  background-color: ${variables.firstColors.subcolor};
  opacity: 0;
  
  :hover {
    opacity: 0.3;
    
    & div {
      display: block;
    }
  }
`;

const ImgButtonLeftDiv = styled(ImgButtonDiv)`
  left: 0;
`;

const ImgButtonRightDiv = styled(ImgButtonDiv)`
  right: 0;
`;

const ImgBig = styled.img`
  position: relative;
  z-index: 5;
  max-height: 95%;
  max-width: 70%;
`;

const ImgCloseButton = styled.div`
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
  imgBigSrc: PropTypes.string.isRequired,
  popupActiveClass: PropTypes.string,
};

const defaultProps = {
  popupActiveClass: 'imgPopup imgPopup__unactive',
};

function imgCloseButtonClick() {
  const imgPopup = document.querySelector('.imgPopup');
  document.body.classList.remove('imgPopup__modal-open');
  imgPopup.classList.remove('imgPopup__active');
  imgPopup.classList.add('imgPopup__unactive');
}

function ImgPopup(props) {
  const { imgBigSrc } = props;
  const { popupActiveClass } = props;
  return (
    <ImgPopupDiv className={popupActiveClass}>
      <ImgButtonLeftDiv>
        <div className="imgPopup__button-icon imgPopup__button-icon--left" />
      </ImgButtonLeftDiv>
      <ImgBig src={imgBigSrc} />
      <ImgButtonRightDiv>
        <div className="imgPopup__button-icon imgPopup__button-icon--right" />
      </ImgButtonRightDiv>
      <ImgCloseButton onClick={imgCloseButtonClick} />
    </ImgPopupDiv>
  );
}

ImgPopup.propTypes = propTypes;
ImgPopup.defaultProps = defaultProps;

export default ImgPopup;
