import React from 'react';
import styled from 'styled-components';
import { device } from '../../variables';
import { variables } from '../../variables';

const TitleH4 = styled.h4`
  font-family: ${variables.fontTitle};
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1em;
  line-height: 20px;
  color: ${variables.secondaryColors.textgray};

  @media ${device.pad} {
    margin-bottom: 10px;
    font-size: 0.9em;
    line-height: 20px;
  }

  @media ${device.mobile} {
    margin-bottom: 10px;
    font-size: 0.9em;
    line-height: 20px;
  }
`;

class H4Title extends React.Component {
  render() {
    return(
      <TitleH4>{this.props.text}</TitleH4>
    );
  }
}

export default H4Title;
