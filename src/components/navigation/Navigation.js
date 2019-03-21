import React from 'react';
import styled from 'styled-components';
import { device } from '../variables';
import { variables } from '../variables';

const NavigationDiv = styled.nav`
  display: flex;
  justify-content: center;
  position: relative;
  width: 1220px;
  margin: 0 auto 20px;

  @media ${device.pad} {
    width: 100%;
    margin: 0 auto;
  }

  @media ${device.mobile} {
    display: block;
    background: ${variables.firstColors.primarycolor};
    margin: 0 auto;
    width: 98%;
  }
`;

const NavigationList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;

  @media ${device.pad} {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${device.mobile} {
    display: none;
    width: 100%;
    height: 0;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const NavigationLink = styled.a`
  display: block;
  font-family: ${variables.font};
  font-size: 0.9em;
  font-weight: 400;
  color: ${variables.firstColors.primarycolor};
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 15px;
  border: 1px solid ${variables.bgcolor};
  border-radius: 7px;
  box-sizing: border-box;

  :hover, :active {
    border: 1px solid ${variables.firstColors.primarycolor};
    background-color: ${variables.firstColors.primarycolor};
    color: #ffffff;
  }

  @media ${device.pad} {
    width: 47%;
    line-height: 30px;
    border: 1px solid ${variables.firstColors.primarycolor};
    margin-bottom: 10px;
  }

  @media ${device.mobile} {
    width: 100%;
    line-height: 30px;
    color: #FFFFFF;
    margin: 0;
    border: none;
    border-bottom: 1px solid #FFFFFF;
    border-radius: 0;

    :last-child {
      border-bottom: none;
    }

    :hover, :active {
      border-bottom: 1px solid #FFFFFF;
    }
  }
`;

const NavigationMobileWrap = styled.div`
  @media ${device.mobile} {
    width: 100%;
    height: auto;
    position: relative;
    margin: 0;
    background-color: ${variables.firstColors.subcolor};
  }
`;

const NavigationMobileLink = styled.a`
  display: none;

  @media ${device.mobile} {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid ${variables.secondaryColors.mediumgray};
    line-height: 36px;
    font-family: ${variables.font};
    font-size: 1em;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    padding-left: 10px;

    ::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: -6px;
      right: 7px;
      width: 32px;
      height: 9px;
      box-shadow: 0 3px 0 ${variables.firstColors.subcolor},
        0 8px 0 #fff,
        0 13px 0 ${variables.firstColors.subcolor},
        0 18px 0 #fff,
        0 23px 0 ${variables.firstColors.subcolor},
        0 28px 0 #fff,
        0 28px 0 ${variables.firstColors.subcolor};
    }
  }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {class: ""};

    this.press = this.press.bind(this);
  }
  press(){
    let className = (this.state.class==="on")?"off":"on";
    this.setState({class: className});
  }

  render() {
    return (
      <NavigationDiv>
        <NavigationList className={this.state.class}>
          <NavigationLink href="/">О компании</NavigationLink>
        </NavigationList>
        <NavigationMobileWrap>
          <NavigationMobileLink onClick={this.press} href="#">Меню сайта</NavigationMobileLink>
        </NavigationMobileWrap>
      </NavigationDiv>
    );
  }
}

export default Navigation;
