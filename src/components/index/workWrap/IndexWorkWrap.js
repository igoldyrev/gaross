import React from 'react';
import styled from 'styled-components';
import IndexWork from '../work/IndexWork';

const IndexWorkWrapDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

class IndexWorkWrap extends React.Component {
  render() {
    return (
      <IndexWorkWrapDiv>
        <IndexWork src="/img/index/civil_engineering.jpg" alt="Комплексное промышленное и гражданское строительство" text="Комплексное промышленное и гражданское строительство" />
        <IndexWork src="/img/index/drawing_project.jpg" alt="Проектирование" text="Проектирование" />
        <IndexWork
          src="/img/index/ventilation_installation.jpg"
          alt="Монтаж оборудования"
          text="Поставка, монтаж и пуско-наладка всего необходимого оборудования для систем водоснабжения
        и канализации, вентиляции, бесперебойного электропитания, сигнализации и связи"
        />
        <IndexWork src="/img/index/service.png" alt="Гарантийное и постгарантийное техническое обслуживание" text="Гарантийное и постгарантийное техническое обслуживание" />
      </IndexWorkWrapDiv>
    );
  }
}

export default IndexWorkWrap;
