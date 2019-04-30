import * as React from 'react';
import styled, { css } from 'styled-components';
import {
  StyleSystemProps,
  WithSpaceProps,
  withSpace,
} from '../../../common/styles/molecules/styledSystem';

export interface WrapperProps extends StyleSystemProps, WithSpaceProps {}

export interface MenuItemProps extends WrapperProps {}

const Wrapper = styled.li`
  list-style: none;

  ${withSpace}
`;

class MenuItem extends React.PureComponent<MenuItemProps, any> {
  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default MenuItem;
