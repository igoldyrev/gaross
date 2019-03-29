import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device, variables } from '../../variables';

const TitleH4 = styled.h4`
  font-family: ${variables.fontTitle};
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1em;
  line-height: 20px;
  color: ${variables.secondaryColors.textgray};

  @media ${device.pad} {
    margin-bottom: 10px;
    font-size: 0.9em;
    line-height: 20px;
  }

  @media ${device.mobile} {
    margin-bottom: 10px;
    font-size: 0.9em;
    line-height: 20px;
  }
`;

const propTypes = {
  text: PropTypes.string.isRequired,
};

function H4Title({ text }) {
  return <TitleH4>{text}</TitleH4>;
}

H4Title.propTypes = propTypes;

export default H4Title;
