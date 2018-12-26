import * as React from 'react';
import { withFormConsumer } from '../../';
import { Checkbox, CheckboxProps } from './Checkbox';
import { ExternalWithFormConsumerProps } from '../Form/withFormConsumer';

interface State {}

export type CheckboxFieldProps = CheckboxProps & ExternalWithFormConsumerProps;

class CheckboxFieldBase extends React.Component<CheckboxFieldProps, State> {
  constructor(props: CheckboxFieldProps) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;

    return <Checkbox {...rest} />;
  }
}

const CheckboxFieldWithFormConsumer = withFormConsumer<
  ExternalWithFormConsumerProps
>(CheckboxFieldBase);

export const CheckboxField = (props: CheckboxFieldProps) => (
  <CheckboxFieldWithFormConsumer {...props} />
);
