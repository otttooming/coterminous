import * as React from 'react';
import styled from 'styled-components';

interface GridItemProps extends React.HTMLAttributes<HTMLElement> {
  as: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.li`
  list-style: none;
`;

class GridItem extends React.PureComponent<GridItemProps, any> {
  static defaultProps = {
    as: 'div',
  };

  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default GridItem;
