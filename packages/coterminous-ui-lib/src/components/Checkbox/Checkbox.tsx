import * as React from 'react';
import {
  CheckboxStyle,
  InputWrapperStyle,
  HiddenInput,
  CheckboxLabelWrapper,
} from './checkbox.style';
import styled from 'styled-components';
import {
  ControlWrapperInternalProps, // Required due to TS export requirements. https://github.com/Microsoft/TypeScript/issues/9944
  ControlWrapper,
  ControlWrapperProps,
} from '../ControlWrapper/ControlWrapper';
import { extractControlWrapperProps } from '../ControlWrapper/controlWrapperHelper';
import { CSSIcons } from '../Icons/Icons';

export enum CheckboxType {
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
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

export type CheckboxProps = Props & ControlWrapperProps;

class CheckboxBase extends React.Component<CheckboxProps, State> {
  static defaultProps = {
    type: CheckboxType.CHECKBOX,
  };

  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  render() {
    const {
      className,
      children,
      inputLabel,
      type,
      name,
      checked,
      ...restProps
    } = this.props;
    const attributes = { className, name };

    return (
      <ControlWrapper {...extractControlWrapperProps(this.props)}>
        <CheckboxLabelWrapper>
          <InputWrapperStyle>
            {(type === CheckboxType.RADIO ? checked : this.state.isChecked) && (
              <CSSIcons.Checkmark />
            )}
          </InputWrapperStyle>

          <HiddenInput
            type={type}
            {...attributes}
            checked={this.props.checked}
            onChange={this.handleChange}
          />
          <span>{inputLabel}</span>
        </CheckboxLabelWrapper>
      </ControlWrapper>
    );
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { onChange, value } = this.props;

    const checked: boolean = Boolean(event.currentTarget.checked);

    this.setState({
      isChecked: checked,
    });

    if (onChange) {
      onChange(checked ? value : undefined);
    }
  };
}

export const Checkbox = styled(CheckboxBase)<any>`
  ${CheckboxStyle};
`;
