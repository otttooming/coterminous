import * as React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../';
import {
  styleSystemCommon,
  StyleSystemCommonProps,
  StyleSystemSpaceProps,
  styleSystemSpace,
} from '../../../common/styleSystem';

export interface WrapperProps
  extends StyleSystemCommonProps,
    StyleSystemSpaceProps {}

export interface ListItemProps extends WrapperProps {}

const Wrapper = styled.li`
  list-style: none;

  ${styleSystemCommon}
  ${styleSystemSpace}
`;

class ListItem extends React.PureComponent<ListItemProps, any> {
  public render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default ListItem;
