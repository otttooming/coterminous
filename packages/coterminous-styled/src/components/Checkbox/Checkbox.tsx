import * as React from "react";
import {
  CheckboxStyle,
  InputWrapperStyle,
  HiddenInput,
  CheckboxLabelWrapper,
} from "./checkbox.style";

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  styled,
  StyledComponentClass, // Required for tsconfig declaration export
  CoterminousStyledThemeProps, // Required for tsconfig declaration export
  Styles,
  CSSIcons, // Required for tsconfig declaration export
} from "coterminous-styled";
import {
  ControlWrapperInternalProps, // Required due to TS export requirements. https://github.com/Microsoft/TypeScript/issues/9944
  ControlWrapper,
  ControlWrapperProps,
} from "../ControlWrapper/ControlWrapper";
import { extractControlWrapperProps } from "../ControlWrapper/controlWrapperHelper";

export interface Props {
  onChange?: (value: boolean) => void;
  className?: string;
  inputLabel: React.ReactNode;
}

interface State {
  isChecked: boolean;
}

export type CheckboxProps = Props & ControlWrapperProps;

class CheckboxBase extends React.Component<CheckboxProps, State> {
  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  render() {
    const { className, children, inputLabel, ...restProps } = this.props;
    const { isChecked } = this.state;
    const attributes = { className };

    return this.renderControlWrapper(
      <CheckboxLabelWrapper>
        <InputWrapperStyle>
          {isChecked && <CSSIcons.Checkmark />}
        </InputWrapperStyle>

        <HiddenInput
          type="checkbox"
          {...attributes}
          onChange={this.handleChange}
        />
        <span>{inputLabel}</span>
      </CheckboxLabelWrapper>,
    );
  }

  renderControlWrapper = (element: React.ReactNode) => {
    const { label } = this.props;

    return (
      <ControlWrapper {...extractControlWrapperProps(this.props)}>
        {element}
      </ControlWrapper>
    );
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value: boolean = Boolean(event.currentTarget.checked);

    this.setState({
      isChecked: value,
    });

    this.props.onChange(value);
  };
}

export const Checkbox = styled(CheckboxBase)`
  ${CheckboxStyle};
`;