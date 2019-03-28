import React from 'react';
import styled from 'styled-components';
import { device, variables } from '../../variables';
import PropTypes from "prop-types";

const TextSpan = styled.span`
  font-family: ${variables.font};
  font-size: 1em;
  font-weight: inherit;
  line-height: inherit;
  color: ${variables.secondaryColors.textgray};

  @media ${device.pad} {
    font-size: 0.9em;
  }

  @media ${device.mobile} {
    font-size: 0.8em;
    line-height: 20px;
  }
`;

const propTypes = {
  text: PropTypes.string.isRequired,
};

function Span({ text }) {
  return <TextSpan>{text}</TextSpan>;
}

Span.propTypes = propTypes;

export default Span;
