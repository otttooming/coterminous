/// <reference types="react" />
import { SelectProps } from './Select';
import { ExternalWithFormConsumerProps } from '../Form/withFormConsumer';
export declare type SelectFieldProps = SelectProps &
  ExternalWithFormConsumerProps;
export declare const SelectField: (props: SelectFieldProps) => JSX.Element;
