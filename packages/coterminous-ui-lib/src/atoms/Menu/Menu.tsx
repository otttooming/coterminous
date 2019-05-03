import * as React from 'react';
import styled from 'styled-components';
import {
  StyleSystemCommonProps,
  styleSystemSpace,
  StyleSystemSpaceProps,
} from '../../common/styleSystem';

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {}

export interface MenuProps extends WrapperProps {}

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${styleSystemSpace}
`;

class Menu extends React.PureComponent<MenuProps, any> {
  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default Menu;
