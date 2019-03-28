import React from 'react';
import styled from 'styled-components';
import { device, variables } from '../../variables';
import PropTypes from "prop-types";

const TitleH5 = styled.h5`
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

function H5Title({ text }) {
  return <TitleH5>{text}</TitleH5>;
}

H5Title.propTypes = propTypes;

export default H5Title;
