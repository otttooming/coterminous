import * as React from 'react';
import { ControlWrapperProps } from '../ControlWrapper/ControlWrapper';
export declare enum CheckboxType {
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
}
export interface Props {
  onChange?: (value: boolean) => void;
  className?: string;
  inputLabel: React.ReactNode;
  name: string;
  value: any;
  type?: CheckboxType;
  checked?: boolean;
}
export declare type CheckboxProps = Props & ControlWrapperProps;
export declare const Checkbox: any;
