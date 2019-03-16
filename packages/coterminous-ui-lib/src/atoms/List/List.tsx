import * as React from 'react';
import styled from 'styled-components';

interface GridProps {
  min: string;
}

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    GridProps {}

const Wrapper = styled.ul<GridProps>`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.min}, 1fr));
  margin-top: 16px;
`;

class List extends React.PureComponent<ListProps, any> {
  static defaultProps = {
    min: '320px',
  };

  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default List;
