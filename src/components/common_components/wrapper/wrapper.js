import React from 'react';
import styled from 'styled-components';
import { device } from '../../variables';
import { variables } from '../../variables';

const WrapperDiv = styled.div`
  width: 1220px;
  margin: 0 auto 30px;
  padding: 20px;
  background-color: #FFFFFF;
  border: 1px solid ${variables.borderColor};
  border-radius: 3px;
  box-sizing: border-box;

  @media ${device.pad} {
    width: 100%;
    padding: 15px 15px 0;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 15px 15px 0;
    margin: 0 0 30px;
  }
`;

class Wrapper extends React.Component {
  render() {
    return(
      <WrapperDiv></WrapperDiv>
    );
  }
}

export default Wrapper;
