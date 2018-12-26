import * as React from 'react';
import { ControlWrapperStyle, LabelWrapper } from './controlWrapper.style';
import styled from 'styled-components';

export interface ControlWrapperInternalProps {
  label: React.ReactNode;
  isRequired?: boolean;
  className?: string;
}

export type ControlWrapperProps = ControlWrapperInternalProps;

interface State {}

class ControlWrapperBase extends React.Component<any, State> {
  render() {
    const { children, className, label, isRequired } = this.props;

    return (
      <div className={className}>
        <LabelWrapper>
          <label htmlFor="">{label}</label>
          {isRequired && <abbr title="required">*</abbr>}
        </LabelWrapper>
        {children}
      </div>
    );
  }
}

export const ControlWrapper = styled(ControlWrapperBase)`
  ${ControlWrapperStyle};
`;
