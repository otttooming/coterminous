import * as React from 'react';
import { ControlWrapperProps } from '../ControlWrapper/ControlWrapper';
export declare enum TagName {
    Input = "input",
    TextArea = "textarea"
}
export interface Props {
    onChange?: (value: string) => void;
    tagName?: TagName;
    className?: string;
}
interface State {
}
export declare type TextInputProps = Props & ControlWrapperProps;
declare class TextInputBase extends React.Component<TextInputProps, State> {
    constructor(props: TextInputProps);
    render(): JSX.Element;
    renderControlWrapper: (element: React.ReactNode) => JSX.Element;
    handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export declare const TextInput: {
    Input: import("styled-components").StyledComponent<typeof TextInputBase, any, {
        tagName: TagName.Input;
    }, "tagName">;
    TextArea: import("styled-components").StyledComponent<typeof TextInputBase, any, {
        tagName: TagName.TextArea;
    }, "tagName">;
};
export {};
