import React, { Component, Fragment } from 'react';
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

class Img extends Component {
  state = {
    isOpen: false,
  };

  imgClose = () => {
    this.setState({ isOpen: false });
    document.body.classList.remove('modal__modal-open');
  };

  imgOpen = () => {
    this.setState({ isOpen: true });
    document.body.classList.add('modal__modal-open');
  };

  render() {
    const { imgSrc } = this.props;
    const { imgAlt } = this.props;
    const { imgWidth } = this.props;
    const { imgHeight } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        <ImgElement
          onClick={this.imgOpen}
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
        />
        <Modal imgSrc={imgSrc} isOpen={isOpen} onClose={this.imgClose} />
      </Fragment>
    );
  }
}

Img.propTypes = propTypes;
Img.defaultProps = defaultProps;

export default Img;
