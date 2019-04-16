import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { variables, device } from '../variables';
import Modal from '../common_components/modal/modal';

const LetterElement = styled.a`
  display: block;
  float: left;
  clear: both;
  font-family: ${variables.font};
  font-size: ${variables.fontSizes.desktop};
  font-weight: 400;
  color: ${variables.secondaryColors.titlegray};
  text-decoration: none;
  margin-bottom: 5px;
  
  :hover {
    color: ${variables.firstColors.primarycolor};
  }
  
  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }
  
  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
  }
`;

const LetterIcon = styled.i`
  font-size: 1.3em;
  margin-right: 10px;
  
  @media ${device.pad} {
    font-size: 1.1em;
  }
  
  @media ${device.mobile} {
    font-size: 1em;
  }
`;

const propTypes = {
  LetterImgSrc: PropTypes.string.isRequired,
  LetterDescription: PropTypes.string.isRequired,
};

class Letter extends Component {
  state = {
    isOpen: false,
  };

  letterClose = () => {
    this.setState({ isOpen: false });
    document.body.classList.remove('modal__modal-open');
  };

  letterOpen = (e) => {
    e.preventDefault();
    this.setState({ isOpen: true });
    document.body.classList.add('modal__modal-open');
  };

  render() {
    const { LetterImgSrc } = this.props;
    const { LetterDescription } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        <LetterElement href={LetterImgSrc} onClick={this.letterOpen}>
          <LetterIcon className="fa fa-file-text-o" />
          {LetterDescription}
        </LetterElement>
        <Modal isOpen={isOpen} onClose={this.letterClose} imgSrc={LetterImgSrc} />
      </Fragment>
    );
  }
}

Letter.propTypes = propTypes;

export default Letter;
