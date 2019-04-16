import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';

const HeaderWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

function HeaderWrap() {
  return (
    <HeaderWrapDiv>
      <Header />
      <Navigation />
    </HeaderWrapDiv>
  );
}

export default HeaderWrap;
