import * as React from 'react';
import { withFormConsumer, ExternalWithFormConsumerProps } from '../../';
import { Select, SelectProps } from './Select';

interface State {}

export type SelectFieldProps = SelectProps & ExternalWithFormConsumerProps;

class SelectFieldBase extends React.Component<SelectFieldProps, State> {
  constructor(props: SelectFieldProps) {
    super(props);
  }

  render() {
    const { name, ...rest } = this.props;

    return <Select {...rest} />;
  }
}

const SelectFieldWithFormConsumer = withFormConsumer<SelectFieldProps>(
  SelectFieldBase,
);

export const SelectField = (props: SelectFieldProps) => (
  <SelectFieldWithFormConsumer {...props} />
);
