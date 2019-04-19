import React, { Component } from 'react';
import styled from 'styled-components';
import {
  YMaps, Map, GeoObject,
} from 'react-yandex-maps';
import Wrapper from '../common_components/wrapper/wrapper';
import H1Title from '../common_components/title-h1/titleH1';
import Text from '../common_components/text/text';
import H2Title from '../common_components/title-h2/titleH2';
import { titles } from '../variables';
import MetaTags from "react-meta-tags";

const ContactsInner = styled.div`
  margin-bottom: 15px;
`;

const mapState = { center: [58.008157, 56.173439], zoom: 16 };
const mapPoints = {
  office: [58.009134, 56.184986],
  proizvBaza: [58.007127, 56.164639],
};

class Contacts extends Component {
  componentDidMount() {
    document.title = `${titles.contacts}`;
  }

  componentWillUnmount() {
    document.title = '';
  }

  render() {
    return (
      <Wrapper>
        <MetaTags>
          <meta name="description" content="Общество с ограниченной ответственностью Гаросс - контактная информация" />
        </MetaTags>
        <H1Title text="Общество с ограниченной ответственностью 'Гаросс'" />
        <Text firstText="Офис: г.Пермь, ул. Дзержинского 15, офис 10" />
        <Text firstText="Производственная база: г.Пермь, ул. Дзержинского 47 Литера Б1" />
        <H2Title text="Связаться с нами" />
        <ContactsInner className="clearfix">
          <a href="tel:+73422371597" className="link contacts__link">Телефон/факс +7 (342) 237 15 97</a>
          <a href="mailto:info@gaross59.ru" className="link contacts__link">Электронная почта: info@gaross59.ru</a>
        </ContactsInner>
        <H2Title text="Наше местоположение" />
        <YMaps>
          <Map defaultState={mapState} className="contacts__map">
            <GeoObject
              geometry={{
                type: 'Point',
                coordinates: mapPoints.office,
              }}
              properties={{
                iconContent: 'Офис',
              }}
              options={{
                preset: 'islands#blueStretchyIcon',
              }}
            />
            <GeoObject
              geometry={{
                type: 'Point',
                coordinates: mapPoints.proizvBaza,
              }}
              properties={{
                iconContent: 'Производственная база',
              }}
              options={{
                preset: 'islands#blueStretchyIcon',
              }}
            />
          </Map>
        </YMaps>
        <H2Title text="Реквизиты:" />
        <Text firstText="ИНН 5903099470 КПП 590301001" />
        <Text
          firstText="р/с: 40702810949490059143 в Волго-Вятском банке ПАО Сбербанк г. Нижний Новгород; кор.счет: 30101810900000000603; БИК 042202603"
        />
        <Text firstText="ОГРН 1105903000103" />
        <Text firstText="Код по ОКПО 63329089" />
        <Text firstText="ОКВЭД (основной вид деятельности) – 41.20" />
        <Text firstText="Генеральный директор – Голдырев Андрей Николаевич, действующий на основании Устава" />
      </Wrapper>
    );
  }
}

export default Contacts;
