import * as React from 'react';
import {
  H1Style,
  H2Style,
  H3Style,
  H4Style,
  H5Style,
  H6Style,
} from './Heading.style';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

// Enum must be exported or 'has or is using private name' error will occur
export enum TagName {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

interface WrapperProps {
  as: keyof JSX.IntrinsicElements;
}

export interface Props extends React.HTMLAttributes<HTMLElement>, WrapperProps {
  as: keyof JSX.IntrinsicElements;
}

const styles: { [key in string]: FlattenSimpleInterpolation } = {
  h1: H1Style,
  h2: H2Style,
  h3: H3Style,
  h4: H4Style,
  h5: H5Style,
  h6: H6Style,
};

const Wrapper = styled.h1<WrapperProps>`
  ${({ as }) => styles[as]}
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
