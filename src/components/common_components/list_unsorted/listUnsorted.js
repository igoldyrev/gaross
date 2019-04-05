import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const propTypes = {
  children: PropTypes.node.isRequired,
};

function UnsortedList(props) {
  const { children } = props;

  return (
    <UnList>
      {children}
    </UnList>
  );
}

UnsortedList.propTypes = propTypes;

export default UnsortedList;
