import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device, variables } from '../../variables';

const TextBlock = styled.p`
  font-family: ${variables.font};
  font-size: 1em;
  font-weight: inherit;
  line-height: inherit;
  color: ${variables.secondaryColors.textgray};
  margin-bottom: 15px;

  :last-child {
    margin-bottom: 0;
  }

  @media ${device.pad} {
    font-size: 0.9em;
    margin-bottom: 10px;
  }

  @media ${device.mobile} {
    font-size: 0.8em;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

const propTypes = {
  text: PropTypes.string.isRequired,
};

function Text({ text }) {
  return <TextBlock>{text}</TextBlock>;
}

Text.propTypes = propTypes;

export default Text;
