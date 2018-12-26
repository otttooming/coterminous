import * as React from 'react';
import { ControlWrapperProps } from '../ControlWrapper/ControlWrapper';
export declare enum CheckboxType {
    CHECKBOX = "checkbox",
    RADIO = "radio"
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
interface State {
    isChecked: boolean;
}
export declare type CheckboxProps = Props & ControlWrapperProps;
declare class CheckboxBase extends React.Component<CheckboxProps, State> {
    static defaultProps: {
        type: CheckboxType;
    };
    constructor(props: CheckboxProps);
    render(): JSX.Element;
    renderControlWrapper: (element: React.ReactNode) => JSX.Element;
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: import("styled-components").StyledComponent<typeof CheckboxBase, any, any, never>;
export {};
