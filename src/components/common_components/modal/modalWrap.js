import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

class ModalWrap extends React.Component {
  wrap = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.wrap);
    this.wrap.classList.add('modal', 'modal__unactive');
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.wrap);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      children, this.wrap,
    );
  }
}

ModalWrap.propTypes = propTypes;
ModalWrap.defaultProps = defaultProps;

export default ModalWrap;
