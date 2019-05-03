import * as React from 'react';
import { sectionStyle } from './section.style';
import styled from 'styled-components';
import {
  StyleSystemSpaceProps,
  styleSystemSpace,
} from '../../common/styleSystem';

type SectionProps = StyleSystemSpaceProps;

const Wrapper = styled.section`
  ${sectionStyle};
  ${styleSystemSpace}
`;

const Section: React.FC<SectionProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Section;
