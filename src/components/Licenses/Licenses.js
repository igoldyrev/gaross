import React from 'react';
import Wrapper from '../common_components/wrapper/wrapper';
import H1Title from '../common_components/title-h1/titleH1';
import License from './license/license';

function Licenses() {
  return (
    <Wrapper>
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

export default Licenses;
