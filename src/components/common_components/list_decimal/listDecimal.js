import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const propTypes = {
  children: PropTypes.element.isRequired,
};

class DecimalList extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <DList>
        { children }
      </DList>
    );
  }
}

DecimalList.propTypes = propTypes;

export default DecimalList;
