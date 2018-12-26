/// <reference types="react" />
import { CheckboxProps } from '../Checkbox/Checkbox';
import { ExternalWithFormConsumerProps } from '../Form/withFormConsumer';
import { FormState } from '../Form/Form';
export declare type RadioButtonFieldProps = CheckboxProps &
  ExternalWithFormConsumerProps &
  Partial<FormState>;
export declare const RadioButtonField: (
  props: RadioButtonFieldProps,
) => JSX.Element;
