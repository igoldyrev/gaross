import React from 'react';
import styled from 'styled-components';
import { device } from '../../variables';
import { variables } from '../../variables';

const TitleH5 = styled.h5`
  font-family: ${variables.fontTitle};
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  font-size: 0.9em;
  line-height: 20px;
  color: ${variables.secondaryColors.textgray};

  @media ${device.pad} {
    margin-bottom: 10px;
    line-height: 18px;
  }

  @media ${device.mobile} {
    margin-bottom: 10px;
    line-height: 18px;
  }
`;

class H5Title extends React.Component {
  render() {
    return(
      <TitleH5>{this.props.text}</TitleH5>
    );
  }
}

export default H5Title;
