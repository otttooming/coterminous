import * as React from 'react';
export interface ControlWrapperInternalProps {
  label: React.ReactNode;
  isRequired?: boolean;
  className?: string;
}
export declare type ControlWrapperProps = ControlWrapperInternalProps;
interface State {}
declare class ControlWrapperBase extends React.Component<any, State> {
  render(): JSX.Element;
}
export declare const ControlWrapper: import('styled-components').StyledComponent<
  typeof ControlWrapperBase,
  any,
  {},
  never
>;
export {};
