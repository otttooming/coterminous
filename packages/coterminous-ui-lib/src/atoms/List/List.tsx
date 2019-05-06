import * as React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../';
import {
  styleSystemCommon,
  StyleSystemCommonProps,
  StyleSystemSpaceProps,
  styleSystemSpace,
} from '../../common/styleSystem';

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {}

export interface ListProps extends WrapperProps {}

const Wrapper = styled.ul`
  list-style: none;

  ${styleSystemCommon}
  ${styleSystemSpace}
`;

class List extends React.PureComponent<ListProps, any> {
  public render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default List;
