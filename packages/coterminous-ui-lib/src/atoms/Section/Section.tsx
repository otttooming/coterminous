import * as React from 'react';
import { sectionStyle } from './section.style';
import styled from 'styled-components';
import {
  StyleSystemSpaceProps,
  styleSystemSpace,
} from '../../common/styleSystem';

export type SectionProps = StyleSystemSpaceProps &
  React.HTMLAttributes<HTMLElement>;

const Wrapper = styled.section`
  ${sectionStyle};
  ${styleSystemSpace}
`;

const Section: React.FC<SectionProps> = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default Section;
