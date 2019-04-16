import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { variables, device } from '../variables';

const OrderElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${variables.secondaryColors.mediumgray};
  
  @media ${device.mobile} {
    width: 100%;
  }
`;

const OrderLogo = styled.img`
  width: 100px;
  margin-right: 30px;
  
  @media ${device.pad} {
    margin-right: 20px;
  }
  
  @media ${device.mobile} {
    margin-right: 15px;
  }
`;

const OrderDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
`;

const OrderNameText = styled.p`
  font-family: ${variables.font};
  font-size: ${variables.fontSizes.desktop};
  font-weight: 700;
  line-height: inherit;
  margin-bottom: 10px;
  
  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }
  
  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
    line-height: 18px;
  }
`;

const OrderAnnotationText = styled.p`
  font-family: ${variables.font};
  font-size: ${variables.fontSizes.desktop};
  font-weight: 400;
  
  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }
  
  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
    line-height: 18px;
  }
`;

const propTypes = {
  OrderImgLogoSrc: PropTypes.string.isRequired,
  OrderName: PropTypes.string.isRequired,
  OrderAnnotation: PropTypes.string.isRequired,
};

function Order(props) {
  const { OrderImgLogoSrc } = props;
  const { OrderName } = props;
  const { OrderAnnotation } = props;
  return (
    <OrderElement>
      <OrderLogo src={OrderImgLogoSrc} alt={OrderName} />
      <OrderDescription>
        <OrderNameText>{OrderName}</OrderNameText>
        <OrderAnnotationText>{OrderAnnotation}</OrderAnnotationText>
      </OrderDescription>
    </OrderElement>
  );
}

Order.propTypes = propTypes;

export default Order;
