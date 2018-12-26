import * as React from 'react';
import { arrowStyle } from './popover.style';
import styled from 'styled-components';

interface ArrowProps {
  passedRef: (ref: HTMLElement | null) => void;
  style: React.CSSProperties;
  className?: string;
  placement: string;
}

class ArrowBase extends React.Component<ArrowProps, any> {
  render() {
    return (
      <div
        ref={this.props.passedRef}
        style={this.props.style}
        className={this.props.className}
        data-placement={this.props.placement}
      />
    );
  }
}

export const Arrow = styled(ArrowBase)`
  ${arrowStyle};
`;
