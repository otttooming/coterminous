import * as React from 'react';
import { theme } from '../../';
import styled, { css } from 'styled-components';

const common = css`
  margin-top: ${theme.spacing.medium};

  &:first-child {
    margin-top: 0;
  }
`;

export const LabelWrapper = styled.div`
  color: #333;
  font-size: 16px;
  margin-bottom: ${theme.spacing.normal};
`;

export const ControlWrapperStyle = css`
  ${common};
`;
