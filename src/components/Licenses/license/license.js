import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { variables } from '../../variables';
import H2Title from '../../common_components/title-h2/titleH2';
import Text from '../../common_components/text/text';
import ImgWrap from '../../common_components/img/imgWrap';
import Img from '../../common_components/img/img';
import LinkInner from '../link_inner/link_inner';

const LicenseDiv = styled.div`
  padding: 10px;
  margin: 0 0 15px 0;
  border: 1px solid ${variables.secondaryColors.mediumgray};
  border-radius: 5px;
  box-sizing: border-box;
`;

const propTypes = {
  LicenseName: PropTypes.string.isRequired,
  LicenseDescription: PropTypes.string,
  LicenseImgLink: PropTypes.string.isRequired,
  LicensePdfLink: PropTypes.string.isRequired,
};

const defaultProps = {
  LicenseDescription: '',
};

function License(props) {
  const { LicenseName } = props;
  const { LicenseDescription } = props;
  const { LicenseImgLink } = props;
  const { LicensePdfLink } = props;
  return (
    <LicenseDiv>
      <H2Title text={LicenseName} />
      <Text firstText={LicenseDescription} />
      <ImgWrap>
        <Img imgSrc={LicenseImgLink} imgAlt={LicenseName} className="licenses__img" />
      </ImgWrap>
      <LinkInner>
        <i className="fa fa-file-pdf-o licenses__icon" />
        <a href={LicensePdfLink} target="_blank" rel="noopener noreferrer" className="link">Смотреть в PDF</a>
      </LinkInner>
    </LicenseDiv>
  );
}

License.propTypes = propTypes;
License.defaultProps = defaultProps;

export default License;
