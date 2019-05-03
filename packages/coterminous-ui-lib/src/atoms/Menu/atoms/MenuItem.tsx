import * as React from 'react';
import styled, { css } from 'styled-components';
import {
  StyleSystemCommonProps,
  StyleSystemSpaceProps,
  styleSystemSpace,
} from '../../../common/styleSystem';

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {}

export interface MenuItemProps extends WrapperProps {}

const Wrapper = styled.li`
  list-style: none;

  ${styleSystemSpace}
`;

class MenuItem extends React.PureComponent<MenuItemProps, any> {
  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default MenuItem;
