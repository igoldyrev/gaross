import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const propTypes = {
  children: PropTypes.node.isRequired,
};

class ImgPopupPortal extends React.Component {
  constructor(props) {
    super(props);
    this.portal = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.portal);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      children, this.portal,
    );
  }
}

ImgPopupPortal.propTypes = propTypes;

export default ImgPopupPortal;
