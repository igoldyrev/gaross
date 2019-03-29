import React from 'react';
import styled from 'styled-components';
import { device } from '../variables';
import { variables } from '../variables';

const FooterDiv = styled.footer`
  display: flex;
  justify-content: space-between;
  background: ${variables.firstColors.subcolor} ;
  width: 1220px;
  margin: 0 auto;
  padding: 30px 15px;
  box-sizing: border-box;

  @media ${device.pad} {
    width: 100%;
    margin: 0;
    padding: 20px 10px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
`;

const FooterUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: ${props => (props.left ? 'left' : 'right')};
`;

const FooterLi = styled.li`
  font-family: ${variables.font};
  font-size: 1em;
  font-weight: inherit;
  color: #FFFFFF;
  padding: 5px 0;

  @media ${device.mobile} {
    text-align: center;
    font-size: 0.8em;
  }
`;

const FooterLink = styled.a`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: #ffffff;
  text-decoration: none;

  @media ${device.pad} {
    font-size: 0.9em;
  }

  @media ${device.mobile} {
    font-size: 0.8  em;
  }

  :hover {
    text-decoration: underline;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterDiv>
        <FooterUl left>
          <FooterLi>
            <FooterLink href="/" target="parent">© 2010 ООО Гаросс</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink href="/siemap" target="parent">Карта сайта</FooterLink>
          </FooterLi>
        </FooterUl>
        <FooterUl>
          <FooterLi>
            г.Пермь, ул. Дзержинского 15, офис 10
          </FooterLi>
          <FooterLi>
            <FooterLink href="tel:+73422371597">Телефон/факс +7 (342) 237 15 97</FooterLink>
          </FooterLi>
        </FooterUl>
      </FooterDiv>
    );
  }
}

export default Footer;
