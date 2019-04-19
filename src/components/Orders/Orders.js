import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from '../common_components/wrapper/wrapper';
import H1Title from '../common_components/title-h1/titleH1';
import Order from './Order';
import { titles } from '../variables';
import MetaTags from "react-meta-tags";

const OrderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

class Orders extends Component {
  componentDidMount() {
    document.title = `${titles.orders}`;
  }

  componentWillUnmount() {
    document.title = '';
  }

  render() {
    return (
      <Wrapper>
        <MetaTags>
          <meta name="description" content="Общество с ограниченной ответственностью Гаросс - заказчики" />
        </MetaTags>
        <H1Title text="Заказчики" />
        <OrderWrap>
          <Order
            OrderImgLogoSrc="/img/orders/chmz-logo.png"
            OrderName="ЧМЗ"
            OrderAnnotation="Чепецкий механический завод - предприятие госкорпорации 'Росатом'."
          />
          <Order
            OrderImgLogoSrc="/img/orders/nikiret.png"
            OrderName="НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ И КОНСТРУКТОРСКИЙ ИНСТИТУТ РАДИОЭЛЕКТРОННОЙ ТЕХНИКИ"
            OrderAnnotation="Современный научно-производственный комплекс."
          />
          <Order
            OrderImgLogoSrc="/img/orders/gaz.png"
            OrderName="ООО 'Газпром межрегионгаз Пермь'"
            OrderAnnotation="Компания, входящая в структуру ООО «Газпром межрегионгаз» (100% дочернее предприятие ОАО «Газпром»). Осуществляет поставку природного газа всем категориям потребителей Пермского края."
          />
          <Order
            OrderImgLogoSrc="/img/orders/metafrax-logo.png"
            OrderName="МЕТАФРАКС"
            OrderAnnotation="Одно из самых динамично развивающихся химических предприятий в современной России, крупнейший производитель метанола и его производных."
          />
          <Order
            OrderImgLogoSrc="/img/orders/apelsin.png"
            OrderName="ТЦ Апельсин"
            OrderAnnotation="Уголок детства в Закамске."
          />
          <Order
            OrderImgLogoSrc="/img/orders/kontur.gif"
            OrderName="ООО 'Контур'"
            OrderAnnotation="Специализированная организация по экспертизе промышленной безопасности, монтажу, ремонту, реконструкции технических устройств на опасных производственных объектах."
          />
          <Order
            OrderImgLogoSrc="/img/orders/almed.png"
            OrderName="Санаторий-профилакторий 'Алмед'"
            OrderAnnotation="Лучшее медицинское учреждение Российской Федерации."
          />
          <Order
            OrderImgLogoSrc="/img/orders/cbkkama.png"
            OrderName="ЦБК Кама"
            OrderAnnotation="Экслюзивный производитель мелованной бумаги в России!"
          />
          <Order
            OrderImgLogoSrc="/img/orders/rosrezerv.png"
            OrderName="ФГКУ Комбинат 'Алый Стяг' Росрезерва"
            OrderAnnotation="Федеральное государственное казенное учреждение Комбинат 'Алый Стяг' управления федерального агенства по государственным резервам по Приволжскому федеральному округу."
          />
          <Order
            OrderImgLogoSrc="/img/orders/infguard.gif"
            OrderName="НТЦ 'Информационная безопасность'"
            OrderAnnotation="НТЦ «Информационная безопасность» осуществляет весь спектр услуг от обследования, проектирования и создания обьектов защиты информации до их сопровождения и модернизации."
          />
          <Order
            OrderImgLogoSrc="/img/orders/moto.png"
            OrderName="Мотовилихинские заводы"
            OrderAnnotation="«Мотовилихинские заводы» — бренд, известный далеко за пределами Пермского края."
          />
        </OrderWrap>
      </Wrapper>
    );
  }
}

export default Orders;
