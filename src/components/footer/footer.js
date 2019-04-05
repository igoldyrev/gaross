import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, variables } from '../variables';

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
  font-size: ${variables.fontSizes.desktop};
  font-weight: inherit;
  color: #FFFFFF;
  padding: 5px 0;
  
  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }

  @media ${device.mobile} {
    text-align: center;
    font-size: ${variables.fontSizes.mobile};
  }
`;

const FooterLink = styled.a`
  font-family: inherit;
  font-size: ${variables.fontSizes.desktop};
  font-weight: inherit;
  color: #ffffff;
  text-decoration: none;

  @media ${device.pad} {
    font-size: ${variables.fontSizes.pad};
  }

  @media ${device.mobile} {
    font-size: ${variables.fontSizes.mobile};
  }

  :hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterDiv>
      <FooterUl left>
        <FooterLi>
          <Link to="/" className="footer__link">© 2010 ООО Гаросс</Link>
        </FooterLi>
        <FooterLi>
          <Link to="/siemap" className="footer__link">Карта сайта</Link>
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

export default Footer;
