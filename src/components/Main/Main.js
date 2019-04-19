import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Wrapper from '../common_components/wrapper/wrapper';
import IndexTitle from '../index/title/IndexTitle';
import Text from '../common_components/text/text';
import H2Title from '../common_components/title-h2/titleH2';
import IndexWorkWrap from '../index/workWrap/IndexWorkWrap';
import { titles } from '../variables';

class Main extends Component {
  componentDidMount() {
    document.title = `${titles.main}`;
  }

  componentWillUnmount() {
    document.title = '';
  }

  render() {
    return (
      <Wrapper>
        <MetaTags>
          <meta name="description" content="Общество с ограниченной ответственностью Гаросс - комплексные решения в области строительства" />
        </MetaTags>
        <IndexTitle text="ООО «ГАРОСС» успешно работает с 2010 года" />
        <Text
          firstText="Основное направление деятельности предприятия - комплексные решения в области строительства, проектирования, энергетики, обеспечения безопасности и связи государственных и коммерческих структур, предприятий энергетического, нефтегазового и оборонного комплекса, а также объектов железнодорожного и воздушного транспорта."
        />
        <H2Title text="Основные виды работ:" />
        <IndexWorkWrap />
        <H2Title text="Для решения данных задач ООО «ГАРОСС» имеет все необходимые лицензии" />
        <Text firstText="Свидетельство " secondText=" С – 171-59-0961-59-220317 от 22.03.2017 г.">
          <Link to="/licenses" className="link">СРО «Строители Урала»</Link>
        </Text>
        <Text firstText="Свидетельство " secondText=" № П – 112-59-0170-59-290317 от 29.03.2017 г.">
          <Link to="/licenses" className="link">СРО «Проектные организации Урала»</Link>
        </Text>
        <Text firstText="Лицензия " secondText=" от 13.07.2017 г.">
          <Link to="/licenses" className="link">МЧС № 59-Б/00513</Link>
        </Text>
        <Text firstText="Сертификат соответствия ISO" />
        <Text
          firstText="А также располагает высококвалифицированным коллективом проектировщиков, менеджеров, инженеров, монтажников, прошедших обучение и сертификацию."
        />
      </Wrapper>
    );
  }
}

export default Main;
