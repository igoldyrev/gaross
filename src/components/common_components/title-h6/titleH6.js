import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device, variables } from '../../variables';

const TitleH6 = styled.h6`
  font-family: ${variables.fontTitle};
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  font-size: 0.9em;
  line-height: 20px;
  color: ${variables.secondaryColors.textgray};

  @media ${device.pad} {
    margin-bottom: 10px;
    line-height: 18px;
  }

  @media ${device.mobile} {
    margin-bottom: 10px;
    line-height: 18px;
  }
`;

const propTypes = {
  text: PropTypes.string.isRequired,
};

function H6Title(props) {
  const { text } = props;

  return <TitleH6>{text}</TitleH6>;
}

H6Title.propTypes = propTypes;

export default H6Title;
