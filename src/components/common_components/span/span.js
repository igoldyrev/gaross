import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device, variables } from '../../variables';

const TextSpan = styled.span`
  font-family: ${variables.font};
  font-size: ${variables.fontSizes.desktop};
  font-weight: inherit;
  line-height: inherit;
  color: ${variables.secondaryColors.textgray};

  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }

  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
    line-height: 20px;
  }
`;

const propTypes = {
  text: PropTypes.string.isRequired,
};

function Span(props) {
  const { text } = props;

  return <TextSpan>{text}</TextSpan>;
}

Span.propTypes = propTypes;

export default Span;
