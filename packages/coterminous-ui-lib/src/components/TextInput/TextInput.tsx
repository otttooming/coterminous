import * as React from 'react';
import { TextInputStyle } from './textInput.style';
import styled from 'styled-components';
import {
  ControlWrapperInternalProps, // Required due to TS export requirements. https://github.com/Microsoft/TypeScript/issues/9944
  ControlWrapper,
  ControlWrapperProps,
} from '../ControlWrapper/ControlWrapper';
import { extractControlWrapperProps } from '../ControlWrapper/controlWrapperHelper';

// Enum must be exported or 'has or is using private name' error will occur
export enum TagName {
  Input = 'input',
  TextArea = 'textarea',
}

export interface Props {
  onChange?: (value: string) => void;
  tagName?: TagName;
  className?: string;
}

interface State {}

export type TextInputProps = Props & ControlWrapperProps;

class TextInputBase extends React.Component<TextInputProps, State> {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    const {
      className,
      children,
      tagName = TagName.Input,
      ...restProps
    } = this.props;

    const attributes = { ...restProps, className };

    switch (tagName) {
      case TagName.Input:
        return this.renderControlWrapper(
          <input {...attributes} type="text" onChange={this.handleChange} />,
        );
      case TagName.TextArea:
        return this.renderControlWrapper(
          <textarea {...attributes} onChange={this.handleChange} />,
        );
      default:
        return null;
    }
  }

  renderControlWrapper = (element: React.ReactNode) => {
    const { label } = this.props;

    return (
      <ControlWrapper {...extractControlWrapperProps(this.props)}>
        {element}
      </ControlWrapper>
    );
  };

  handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { onChange } = this.props;

    const value = event.currentTarget.value;

    if (onChange) {
      onChange(value);
    }
  };
}

export const TextInput = {
  Input: styled(TextInputBase).attrs({
    tagName: TagName.Input,
  })`
    ${TextInputStyle};
  `,
  TextArea: styled(TextInputBase).attrs({
    tagName: TagName.TextArea,
  })`
    ${TextInputStyle};
  `,
};