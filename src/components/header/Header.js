import React from 'react';
import styled from 'styled-components';
import Logo from './logo.svg';

const HeaderDiv = styled.header`
width: 100%;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1220px;
  margin: 0 auto;
  padding: 30px 0;
`;

const HeaderSvg = styled.div`
  width: 420px;
  align-self: center;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderWrap>S
          <HeaderSvg>
            <a href="/">
              <Logo />
            </a>
          </HeaderSvg>
        </HeaderWrap>
      </HeaderDiv>
    );
  }
}

export default Header;
