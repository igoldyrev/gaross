import React from 'react';
import styled from 'styled-components';
import { device, variables } from '../../variables';
import PropTypes from "prop-types";

const IndexTitleH1 = styled.h1`
  font-family: ${variables.fontTitle};
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.4em;
  line-height: 24px;
  color: inherit;

  @media ${device.pad} {
    font-size: 1.2em;
  }

  @media ${device.mobile} {
    font-size: 0.9em;
  }
`;

const propTypes = {
  text: PropTypes.string.isRequired,
};

function IndexTitle({ text }) {
  return <IndexTitleH1>{text}</IndexTitleH1>;
}

IndexTitle.propTypes = propTypes;

export  default IndexTitle;
