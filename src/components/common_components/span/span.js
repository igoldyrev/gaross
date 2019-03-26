import React from 'react';
import styled from 'styled-components';
import { device } from '../../variables';
import { variables } from '../../variables';

const TextSpan = styled.span`
  font-family: ${variables.font};
  font-size: 1em;
  font-weight: inherit;
  line-height: inherit;
  color: ${variables.secondaryColors.textgray};

  @media ${device.pad} {
    font-size: 0.9em;
  }

  @media ${device.mobile} {
    font-size: 0.8em;
    line-height: 20px;
  }
`;

class Span extends React.Component {
  render() {
    return(
      <TextSpan>{this.props.text}</TextSpan>
    );
  }
}

export default Span;
