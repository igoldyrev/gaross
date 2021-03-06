import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device, variables } from '../../variables';

const TitleH3 = styled.h3`
  font-family: ${variables.fontTitle};
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.2em;
  line-height: 24px;
  color: ${variables.secondaryColors.textgray};

  @media ${device.pad} {
    margin-bottom: 10px;
    font-size: 1em;
    line-height: 22px;
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

function H3Title(props) {
  const { text } = props;

  return <TitleH3>{text}</TitleH3>;
}

H3Title.propTypes = propTypes;

export default H3Title;
