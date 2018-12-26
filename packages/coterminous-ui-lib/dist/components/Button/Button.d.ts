import * as React from 'react';
export interface Props {
  onClick?: () => void;
}
export interface State {
  x: number;
  y: number;
  size: number;
}
export interface GlowProps
  extends Partial<React.HTMLAttributes<HTMLSpanElement>> {
  x: number;
  y: number;
  size: number;
}
export declare const Glow: import('styled-components').StyledComponent<
  React.FunctionComponent<GlowProps>,
  any,
  {},
  never
>;
export declare const Button: import('styled-components').StyledComponent<
  any,
  any,
  {},
  string | number | symbol
>;
