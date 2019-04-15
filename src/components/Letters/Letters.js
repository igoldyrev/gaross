import React, { Component } from 'react';
import styled from 'styled-components';
import { titles, variables } from '../variables';
import Wrapper from '../common_components/wrapper/wrapper';
import H1Title from '../common_components/title-h1/titleH1';
import H4Title from '../common_components/title-h4/titleH4';
import Letter from './Letter';

const LetterWrap = styled.div`
  padding: 10px;
  margin: 0 0 15px 0;
  border: 1px solid ${variables.secondaryColors.mediumgray};
  border-radius: 5px;
  box-sizing: border-box;
`;

const LetterList = styled.div`
  padding: 10px;
  margin-bottom: 15px;
`;

class Letters extends Component {
  componentDidMount() {
    document.title = `${titles.letters}`;
  }

  render() {
    return (
      <Wrapper>
        <H1Title text="Благодарственные письма" />
        <LetterWrap className="clearfix">
          <H4Title text="ФКГУ Комбинат 'Алый Стяг'" />
          <Letter
            LetterImgSrc="/img/letters/alyi-styag-osveshenie.jpg"
            LetterDescription="Монтаж освещения и электросилового оборудования складов"
          />
          <Letter
            LetterImgSrc="/img/letters/alyi-styag-psd.jpg"
            LetterDescription="Разработка проектно-сметной документации на капитальный ремонт сети водоснабжения"
          />
        </LetterWrap>
        <LetterWrap className="clearfix">
          <H4Title text="НТЦ Информационная безопасность" />
          <Letter
            LetterImgSrc="/img/letters/ntc-inf-bezopasnost-smr.jpg"
            LetterDescription="Организация и выполнение строительно-монтажных работ по капитальному ремонту освещения"
          />
          <Letter
            LetterImgSrc="/img/letters/ntc-inf-bezopasnost-pir.jpg"
            LetterDescription="Разработка проектно-сметной документации по договору подряда №59 от 21 августа 2017"
          />
        </LetterWrap>
        <LetterList className="clearfix">
          <Letter
            LetterImgSrc="/img/letters/cbk-kama.jpg"
            LetterDescription="ООО 'ЦБК КАМА'"
          />
          <Letter
            LetterImgSrc="/img/letters/ip-panfilov.jpg"
            LetterDescription="ТЦ Апельсин"
          />
          <Letter
            LetterImgSrc="/img/letters/kontur.jpg"
            LetterDescription="ООО 'Контур'"
          />
          <Letter
            LetterImgSrc="/img/letters/lpp-almed.jpg"
            LetterDescription="Санаторий-профилакторий Алмед"
          />
          <Letter
            LetterImgSrc="/img/letters/metafraks.jpg"
            LetterDescription="ОАО Метафракс"
          />
        </LetterList>
      </Wrapper>
    );
  }
}

export default Letters;
