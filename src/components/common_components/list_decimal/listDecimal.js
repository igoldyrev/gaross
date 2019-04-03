import React from 'react';
import styled from 'styled-components';
import { device, variables } from '../../variables';

const DList = styled.ol`
  list-style-type: decimal;
  font-family: ${variables.font};
  font-size: ${variables.fontSizes.desktop};
  font-weight: inherit;
  line-height: inherit;
  color: ${variables.secondaryColors.textgray};
  
  margin-left: 30px;

  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }

  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
  }
`;

function DecimalList(props) {
  return (
    <DList>
      {props.children}
    </DList>
  );
}

export default DecimalList;
