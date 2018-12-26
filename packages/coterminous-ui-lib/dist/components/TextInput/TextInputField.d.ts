/// <reference types="react" />
import { TextInputProps } from './TextInput';
import { ExternalWithFormConsumerProps } from '../Form/withFormConsumer';
export declare type TextInputFieldProps = TextInputProps &
  ExternalWithFormConsumerProps;
export declare const TextInputField: {
  Input: (props: TextInputFieldProps) => JSX.Element;
  TextArea: (props: TextInputFieldProps) => JSX.Element;
};
