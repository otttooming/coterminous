import * as React from 'react';
import { sectionStyle } from './section.style';
import styled from 'styled-components';
import {
  WithSpaceProps,
  withSpace,
} from '../../common/styles/molecules/styledSystem';

type SectionProps = WithSpaceProps;

const Wrapper = styled.section`
  ${sectionStyle};
  ${withSpace}
`;

const Section: React.FC<SectionProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Section;
