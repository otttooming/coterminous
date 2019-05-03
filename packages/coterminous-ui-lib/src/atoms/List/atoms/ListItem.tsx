import * as React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../';
import {
  styleSystemCommon,
  StyleSystemCommonProps,
} from '../../../common/styleSystem';

export interface WrapperProps extends StyleSystemCommonProps {}

export interface ListItemProps extends WrapperProps {}

const topSpacing = css`
  &:first-child {
    margin-top: 0;
  }
`;

const defaultSpacing = css<WrapperProps>`
  margin-top: ${theme.space.s};

  ${({ m, mt }) => !Boolean(m) && !Boolean(mt) && topSpacing}
`;

const Wrapper = styled.li`
  list-style: none;

  ${defaultSpacing}
  ${styleSystemCommon}
`;

class ListItem extends React.PureComponent<ListItemProps, any> {
  public render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default ListItem;
