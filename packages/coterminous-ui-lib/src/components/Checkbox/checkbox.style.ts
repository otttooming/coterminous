import { visuallyHidden } from './../../common/styles/atoms/display.style';
import * as React from 'react';
import { theme } from '../../';
import styled, { css } from 'styled-components';

const common = css`
  margin: 0 0 ${theme.spacing.medium} 0;
`;

export const CheckboxStyle = css`
  ${common};
`;

export const InputWrapperStyle = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: ${theme.border.radius.small};
  margin-right: ${theme.spacing.medium};
`;

export const CheckboxLabelWrapper = styled.label`
  display: flex;
  align-items: center;
`;

export const HiddenInput = styled.input`
  ${visuallyHidden};
`;
