import React from 'react';
import styled from 'styled-components';
import Logo from './logo.svg';
import { device } from './../variables';

const HeaderDiv = styled.header`
  width: 100%;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1220px;
  margin: 0 auto;
  padding: 30px 0;

  @media ${device.pad} {
    width: 100%;
  }

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
    padding: 15px 10px;
    box-sizing: border-box;
  }
`;

const HeaderSvg = styled.div`
  width: 420px;
  align-self: center;

  @media ${device.pad} {
    margin-left: 15px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderWrap>
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
