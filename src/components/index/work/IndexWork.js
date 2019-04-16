import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device, variables } from '../../variables';

const IndexWorkDiv = styled.div`
  width: 49%;
    padding: 15px 0;
    text-align: center;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const IndexNameH2 = styled.h2`
  font-family: ${variables.font};
  font-size: 1em;
  font-weight: 400;
  color: ${variables.secondaryColors.textgray};
  line-height: 24px;

  @media ${device.pad} {
    font-size: 0.9em;
  }

  @media ${device.mobile} {
    font-size: 0.8em;
  }
`;

const IndexImage = styled.img`
  width: 350px;
  margin-bottom: 15px;
  
  @media ${device.pad} {
    width: 300px;
  }
  
  @media ${device.mobile} {
    width: 100%;
  }
`;

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function IndexWork(props) {
  const { src } = props;
  const { alt } = props;
  const { text } = props;

  return (
    <IndexWorkDiv>
      <IndexImage src={src} alt={alt} />
      <IndexNameH2>{text}</IndexNameH2>
    </IndexWorkDiv>
  );
}

IndexWork.propTypes = propTypes;

export default IndexWork;
