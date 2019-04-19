import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Wrapper from '../common_components/wrapper/wrapper';
import H1Title from '../common_components/title-h1/titleH1';
import License from './license/license';
import { titles } from '../variables';

class Licenses extends Component {
  componentDidMount() {
    document.title = `${titles.licenses}`;
  }

  componentWillUnmount() {
    document.title = '';
  }

  render() {
    return (
      <Wrapper>
        <MetaTags>
          <meta name="description" content="Общество с ограниченной ответственностью Гаросс - лицензии на осуществление деятельности" />
        </MetaTags>
        <H1Title text="Лицензии" />
        <License
          LicenseName="Лицензия МЧС"
          LicenseDescription="На осуществление деятельности по монтажу , техническому обслуживанию и ремонту средств обеспечения пожарной безопасности зданий и сооружений"
          LicenseImgLink="/img/licenses/mchs-1.jpg"
          LicensePdfLink="/pdf/mchs-pdf.pdf"
        />
        <License
          LicenseName="СРО 'Строители Урала'"
          LicenseDescription="Свидетельство о допуске к определенным видам работ, которые оказывают влияние на безопасность объектов капитального строительства"
          LicenseImgLink="/img/licenses/smr-220317-0.jpg"
          LicensePdfLink="/pdf/smr-220317-pdf.pdf"
        />
        <License
          LicenseName="СРО на проектные работы"
          LicenseImgLink="/img/licenses/project-work-0.jpg"
          LicensePdfLink="/pdf/project-work-pdf.pdf"
        />
      </Wrapper>
    );
  }
}

export default Licenses;
