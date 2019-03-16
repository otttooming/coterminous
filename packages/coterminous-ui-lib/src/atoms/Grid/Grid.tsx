import * as React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  min: string;
  gap: string;
}

export interface GridProps
  extends React.HTMLAttributes<HTMLElement>,
    WrapperProps {
  as: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.ul<WrapperProps>`
  display: grid;
  grid-gap: ${props => props.gap};
  grid-template-columns: repeat(auto-fill, minmax(${props => props.min}, 1fr));
  margin-top: 16px;
`;

class Grid extends React.PureComponent<GridProps, any> {
  static defaultProps = {
    as: 'div',
    min: '320px',
    gap: '32px',
  };

  public render() {
    const { children, ...restProps } = this.props;

    return <Wrapper {...restProps}>{children}</Wrapper>;
  }
}

export default Grid;
