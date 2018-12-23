/// <reference types="react" />
import { ExternalWithFormConsumerProps } from '../../';
import { CheckboxProps } from './Checkbox';
export interface Props {}
export declare type CheckboxFieldProps = Props &
  CheckboxProps &
  ExternalWithFormConsumerProps;
export declare const CheckboxField: (props: CheckboxFieldProps) => JSX.Element;
