import React from 'react';
import styled from 'styled-components';
import { device } from '../../variables';
import { variables } from '../../variables';

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

class H1Title extends React.Component {
  render() {
    return(
      <TitleH1>{this.props.text}</TitleH1>
    );
  }
}

export default H1Title;
