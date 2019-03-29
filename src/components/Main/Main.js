import React from 'react';
import Wrapper from '../common_components/wrapper/wrapper';
import IndexTitle from '../index/title/IndexTitle';
import Text from '../common_components/text/text';
import H2Title from '../common_components/title-h2/titleH2';
import IndexWorkWrap from '../index/workWrap/IndexWorkWrap';

class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        <IndexTitle text="ООО «ГАРОСС» успешно работает с 2010 года" />
        <Text text="Основное направление деятельности предприятия - комплексные решения в области строительства, проектирования, энергетики, обеспечения безопасности и связи государственных и коммерческих структур, предприятий энергетического, нефтегазового и оборонного комплекса, а также объектов железнодорожного и воздушного транспорта." />
        <H2Title text="Основные виды работ:" />
        <IndexWorkWrap />
      </Wrapper>
    );
  }
}

export default Main;
