import * as React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../';
import {
  styleSystem,
  StyleSystemProps,
} from '../../../common/styles/molecules/styledSystem';

export interface WrapperProps extends StyleSystemProps {}

export interface MenuItemProps extends WrapperProps {}

const topSpacing = css`
  &:first-child {
    margin-top: 0;
  }
`;

const defaultSpacing = css<WrapperProps>`
  margin-top: ${theme.spacing.normal};

  ${({ m, mt }) => !Boolean(m) && !Boolean(mt) && topSpacing}
`;

const Wrapper = styled.li`
  list-style: none;

  ${defaultSpacing}
  ${styleSystem}
`;

class MenuItem extends React.PureComponent<MenuItemProps, any> {
  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default MenuItem;
