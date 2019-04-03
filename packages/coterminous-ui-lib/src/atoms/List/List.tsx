import * as React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../';
import {
  styleSystem,
  StyleSystemProps,
} from '../../common/styles/molecules/styledSystem';

export interface WrapperProps extends StyleSystemProps {}

export interface ListProps extends WrapperProps {}

const topSpacing = css`
  &:first-child {
    margin-top: 0;
  }
`;

const defaultSpacing = css<WrapperProps>`
  margin-top: ${theme.spacing.medium};

  ${({ m, mt }) => !Boolean(m) && !Boolean(mt) && topSpacing}
`;

const Wrapper = styled.ul`
  list-style: none;

  ${defaultSpacing}
  ${styleSystem}
`;

class List extends React.PureComponent<ListProps, any> {
  public render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default List;