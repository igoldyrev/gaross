import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device, variables } from '../../variables';

const TitleH1 = styled.h1`
  font-family: ${variables.fontTitle};
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.6em;
  line-height: 40px;
  color: inherit;

  @media ${device.pad} {
    margin-bottom: 10px;
    font-size: 1.4em;
    line-height: 30px;
  }

  @media ${device.mobile} {
    margin-bottom: 10px;
    font-size: 1.2em;
    line-height: 24px;
  }
`;


const propTypes = {
  text: PropTypes.string.isRequired,
};

function H1Title(props) {
  const { text } = props;

  return <TitleH1>{text}</TitleH1>;
}

H1Title.propTypes = propTypes;

export default H1Title;
