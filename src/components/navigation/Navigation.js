import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, variables } from '../variables';

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
    this.state = { activeClass: '' };

    this.press = this.press.bind(this);
  }

  press() {
    const { activeClass } = this.state;
    const className = (activeClass === 'navigationMobile__active') ? '' : 'navigationMobile__active';
    this.setState({ activeClass: className });
  }

  render() {
    const { activeClass } = this.state;
    return (
      <NavigationDiv>
        <NavigationList className={activeClass}>
          <Link to="/" className="navigationLink">О компании</Link>
          <Link to="/licenses" className="navigationLink">Лицензии</Link>
          <Link to="/orders" className="navigationLink">Заказчики</Link>
          <Link to="/letters" className="navigationLink">Благодарственные письма</Link>
          <Link to="/contacts" className="navigationLink">Контакты</Link>
        </NavigationList>
        <NavigationMobileWrap>
          <NavigationMobileLink onClick={this.press} href="#">Меню сайта</NavigationMobileLink>
        </NavigationMobileWrap>
      </NavigationDiv>
    );
  }
}

export default Navigation;
