import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { variables, device } from '../variables';

const LetterElement = styled.a`
  display: block;
  float: left;
  clear: both;
  font-family: ${variables.font};
  font-size: ${variables.fontSizes.desktop};
  font-weight: 400;
  color: ${variables.secondaryColors.titlegray};
  text-decoration: none;
  margin-bottom: 5px;
  
  :hover {
    color: ${variables.firstColors.primarycolor};
  }
  
  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }
  
  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
  }
`;

const LetterIcon = styled.i`
  font-size: 1.3em;
  margin-right: 10px;
  
  @media ${device.pad} {
    font-size: 1.1em;
  }
  
  @media ${device.mobile} {
    font-size: 1em;
  }
`;

const propTypes = {
  LetterImgSrc: PropTypes.string.isRequired,
  LetterDescription: PropTypes.string.isRequired,
};

function Letter(props) {
  const { LetterImgSrc } = props;
  const { LetterDescription } = props;
  return (
    <LetterElement href={LetterImgSrc}>
      <LetterIcon className="fa fa-file-text-o" />
      {LetterDescription}
    </LetterElement>
  );
}

Letter.propTypes = propTypes;

export default Letter;
