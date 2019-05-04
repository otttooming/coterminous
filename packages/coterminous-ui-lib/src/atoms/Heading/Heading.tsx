import * as React from 'react';
import { common } from './Heading.style';
import styled from 'styled-components';
import {
  styleSystemCommon,
  StyleSystemCommonProps,
  StyleSystemSpaceProps,
  styleSystemSpace,
} from '../../common/styleSystem';

// Enum must be exported or 'has or is using private name' error will occur
export enum TagName {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {
  as: keyof JSX.IntrinsicElements;
}

export interface Props extends React.HTMLAttributes<HTMLElement>, WrapperProps {
  as: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.h1<WrapperProps>`
  ${common}
  ${styleSystemCommon}
  ${styleSystemSpace}
`;

class Heading extends React.PureComponent<Props, any> {
  static defaultProps = {
    as: 'h1',
  };

  render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default Heading;
