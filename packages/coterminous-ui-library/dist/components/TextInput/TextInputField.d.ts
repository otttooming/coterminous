/// <reference types="react" />
import { ExternalWithFormConsumerProps } from '../../';
import { TextInputProps } from './TextInput';
export declare type TextInputFieldProps = TextInputProps &
  ExternalWithFormConsumerProps;
export declare const TextInputField: {
  Input: (props: TextInputFieldProps) => JSX.Element;
  TextArea: (props: TextInputFieldProps) => JSX.Element;
};
