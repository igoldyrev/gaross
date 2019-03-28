import React from 'react';
import styled from 'styled-components';
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

class IndexWork extends React.Component {
  render() {
    return (
      <IndexWorkDiv>
        <IndexImage src={this.props.src} alt={this.props.alt} />
        <IndexNameH2>{this.props.text}</IndexNameH2>
      </IndexWorkDiv>
    );
  }
}

export  default IndexWork;
