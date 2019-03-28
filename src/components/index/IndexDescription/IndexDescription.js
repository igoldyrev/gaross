import React from 'react';
import styled from 'styled-components';
import { device, variables } from './../../variables';
import Text from './../../common_components/text/text';
import IndexTitle from "../title/IndexTitle";

class IndexDescription extends React.Component {
  render() {
    return(
      <div>
        <IndexTitle text="ООО «ГАРОСС» успешно работает с 2010 года" />
        <Text text="Основное направление деятельности предприятия - комплексные решения в области строительства,
    проектирования, энергетики, обеспечения безопасности и связи государственных и коммерческих структур, предприятий
    энергетического, нефтегазового и оборонного комплекса, а также объектов железнодорожного и воздушного
    транспорта."/>
      </div>
    );
  }
}

export default IndexDescription;
