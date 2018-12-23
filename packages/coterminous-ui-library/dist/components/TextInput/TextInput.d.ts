import { ControlWrapperProps } from '../ControlWrapper/ControlWrapper';
export declare enum TagName {
  Input = 'input',
  TextArea = 'textarea',
}
export interface Props {
  onChange?: (value: string) => void;
  tagName?: TagName;
  className?: string;
}
export declare type TextInputProps = Props & ControlWrapperProps;
export declare const TextInput: {
  Input: any;
  TextArea: any;
};
