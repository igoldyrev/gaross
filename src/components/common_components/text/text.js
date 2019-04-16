import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device, variables } from '../../variables';

const TextBlock = styled.p`
  font-family: ${variables.font};
  font-size: ${variables.fontSizes.desktop};
  font-weight: inherit;
  line-height: inherit;
  color: ${variables.secondaryColors.textgray};
  margin-bottom: 15px;

  :last-child {
    margin-bottom: 0;
  }

  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
    margin-bottom: 10px;
  }

  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

const propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string,
  children: PropTypes.element,
};

const defaultProps = {
  secondText: '',
  children: null,
};

function Text(props) {
  const { firstText } = props;
  const { secondText } = props;
  const { children } = props;

  return (
    <TextBlock>
      { firstText }
      { children }
      { secondText }
    </TextBlock>
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
