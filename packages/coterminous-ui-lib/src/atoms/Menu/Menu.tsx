import * as React from 'react';
import styled from 'styled-components';
import {
  StyleSystemProps,
  withSpace,
  WithSpaceProps,
} from '../../common/styles/molecules/styledSystem';

export interface WrapperProps extends StyleSystemProps, WithSpaceProps {}

export interface MenuProps extends WrapperProps {}

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${withSpace}
`;

class Menu extends React.PureComponent<MenuProps, any> {
  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default Menu;
