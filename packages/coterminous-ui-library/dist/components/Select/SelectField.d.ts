/// <reference types="react" />
import { ExternalWithFormConsumerProps } from '../../';
import { SelectProps } from './Select';
export interface Props {}
export declare type SelectFieldProps = Props &
  SelectProps &
  ExternalWithFormConsumerProps;
export declare const SelectField: (props: SelectFieldProps) => JSX.Element;
