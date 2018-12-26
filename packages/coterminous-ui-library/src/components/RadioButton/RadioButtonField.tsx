import * as React from 'react';
import { withFormConsumer, Checkbox } from '../../';
import { CheckboxType, CheckboxProps } from '../Checkbox/Checkbox';
import { ExternalWithFormConsumerProps } from '../Form/withFormConsumer';
import { FormState } from '../Form/Form';

interface State {}

export type RadioButtonFieldProps = CheckboxProps &
  ExternalWithFormConsumerProps &
  Partial<FormState>;

class RadioButtonFieldBase extends React.Component<
  RadioButtonFieldProps,
  State
> {
  constructor(props: RadioButtonFieldProps) {
    super(props);
  }

  render() {
    const { fields, name, value, label, inputLabel, onChange } = this.props;

    const checked: boolean =
      fields && fields[name] ? value === fields[name].state : false;

    return (
      <Checkbox
        type={CheckboxType.RADIO}
        name={name}
        label={label}
        value={value}
        inputLabel={inputLabel}
        checked={checked}
        onChange={onChange}
      />
    );
  }
}

const RadioButtonFieldWithFormConsumer = withFormConsumer<
  ExternalWithFormConsumerProps
>(RadioButtonFieldBase);

export const RadioButtonField = (props: RadioButtonFieldProps) => (
  <RadioButtonFieldWithFormConsumer {...props} />
);
