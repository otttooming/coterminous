import * as React from 'react';
import styled from 'styled-components';

export interface ListProps {}

const Wrapper = styled.ul`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-top: 16px;
`;

class List extends React.PureComponent<ListProps, any> {
  public render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default List;
