import React from 'react';
import styled from 'styled-components';
import { device } from '../../variables';
import { variables } from '../../variables';

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

class H3Title extends React.Component {
  render() {
    return(
      <TitleH3>{this.props.text}</TitleH3>
    );
  }
}

export default H3Title;
