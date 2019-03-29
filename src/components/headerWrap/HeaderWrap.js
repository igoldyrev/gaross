import React from 'react';
import styled from 'styled-components';
import { device } from '../variables';
import { variables } from '../variables';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';

const HeaderWrapElement = <Header />;
const NavigationElement = <Navigation />;

const HeaderWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

class HeaderWrap extends React.Component {
  render() {
    return (
      <HeaderWrapDiv>
        {HeaderWrapElement}
        {NavigationElement}
      </HeaderWrapDiv>
    );
  }
}

export default HeaderWrap;
