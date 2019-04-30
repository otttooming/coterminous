import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../common/styles/theme';
import {
  GridGapProps,
  gridGap,
  GridTemplatesAreasProps,
  gridTemplateRows,
  gridTemplateColumns,
  GridTemplatesColumnsProps,
  GridTemplatesRowsProps,
  gridTemplateAreas,
} from 'styled-system';
import {
  styleSystem,
  StyleSystemProps,
  withSpace,
  WithSpaceProps,
} from '../../common/styles/molecules/styledSystem';

interface WrapperProps
  extends StyleSystemProps,
    WithSpaceProps,
    GridGapProps,
    GridTemplatesAreasProps,
    GridTemplatesRowsProps,
    GridTemplatesColumnsProps {}

export interface GridProps
  extends React.HTMLAttributes<HTMLElement>,
    WrapperProps {
  as: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.ul<WrapperProps>`
  margin: 0;
  padding: 0;

  ${styleSystem}
  ${withSpace}
  ${gridGap}
  ${gridTemplateAreas}
  ${gridTemplateRows}
  ${gridTemplateColumns}
`;

class Grid extends React.PureComponent<GridProps, any> {
  static defaultProps = {
    display: 'grid',
    as: 'div',
    gridGap: theme.space.l,
  };

  public render() {
    const {
      children,

      ...restProps
    } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default Grid;
