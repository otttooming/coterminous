import * as React from 'react';
import { withFormConsumer } from '../../';
import { TextInput, TextInputProps, TagName } from './TextInput';
import { ExternalWithFormConsumerProps } from '../Form/withFormConsumer';

interface State {}

export type TextInputFieldProps = TextInputProps &
  ExternalWithFormConsumerProps;

class TextInputFieldBase extends React.Component<TextInputFieldProps, State> {
  constructor(props: TextInputFieldProps) {
    super(props);
  }

  render() {
    const { name, tagName, ...rest } = this.props;

    switch (tagName) {
      case TagName.Input:
        return <TextInput.Input {...rest} />;
      case TagName.TextArea:
        return <TextInput.TextArea {...rest} />;
      default:
        return null;
    }
  }
}

const TextInputFieldWithFormConsumer = withFormConsumer<TextInputFieldProps>(
  TextInputFieldBase,
);

export const TextInputField = {
  Input: (props: TextInputFieldProps) => (
    <TextInputFieldWithFormConsumer {...props} tagName={TagName.Input} />
  ),
  TextArea: (props: TextInputFieldProps) => (
    <TextInputFieldWithFormConsumer {...props} tagName={TagName.TextArea} />
  ),
};
