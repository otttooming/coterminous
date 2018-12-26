import * as React from 'react';
import { theme } from '../../';
import styled, { css } from 'styled-components';

const common = css`
  margin: 0 0 ${theme.spacing.medium} 0;
`;

export const LabelWrapper = styled.div`
  margin-bottom: ${theme.spacing.normal};
`;

export const ControlWrapperStyle = css`
  ${common};
`;
