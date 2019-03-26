import React from 'react';
import styled from 'styled-components';
import { device } from '../../variables';
import { variables } from '../../variables';

const TitleH2 = styled.h2`
  font-family: ${variables.fontTitle};
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.4em;
  line-height: 32px;
  color: ${variables.secondaryColors.titlegray};

  @media ${device.pad} {
    margin-bottom: 10px;
    font-size: 1.2em;
    line-height: 26px;
  }

  @media ${device.mobile} {
    margin-bottom: 10px;
    font-size: 1em;
    line-height: 20px;
  }
`;

class H2Title extends React.Component {
  render() {
    return(
      <TitleH2>{this.props.text}</TitleH2>
    );
  }
}

export default H2Title;
