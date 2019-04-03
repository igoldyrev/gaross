import React from 'react';
import styled from 'styled-components';
import { device, variables } from '../../variables';

const UnList = styled.ul`
  list-style-type: none;
  font-family: ${variables.font};
  font-size: ${variables.fontSizes.desktop};
  font-weight: inherit;
  line-height: inherit;
  color: ${variables.secondaryColors.textgray};
  
  li:before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${variables.firstColors.subcolor};
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
  }

  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }

  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
  }
`;

function UnsortedList(props) {
  return (
    <UnList>
      {props.children}
    </UnList>
  );
}

export default UnsortedList;
