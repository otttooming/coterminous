import * as React from 'react';
import { GlobalStyle } from '../../components/GlobalStyle/GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 32px;
`;

export interface StorybookWrapperProps {
  style: React.CSSProperties;
}

class StorybookWrapper extends React.Component<StorybookWrapperProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { children, style } = this.props;

    return (
      <Wrapper style={style}>
        <GlobalStyle />

        {children}
      </Wrapper>
    );
  }
}

export default StorybookWrapper;
