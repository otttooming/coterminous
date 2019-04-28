import * as React from 'react';
import { GlobalStyle } from '../../components/GlobalStyle/GlobalStyle';
import {
  mapCustomPropertyToStyleSystem,
  space,
} from '../../components/GlobalStyle/customProperties';
import styled, { ThemeProvider } from 'styled-components';

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
      <ThemeProvider theme={{ space: mapCustomPropertyToStyleSystem(space) }}>
        <Wrapper style={style}>
          <GlobalStyle />

          {children}
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default StorybookWrapper;
