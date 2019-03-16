import { css } from 'styled-components';
import { theme } from '../../';

const common = css`
  margin: ${theme.spacing.large} 0 0 0;
  font-weight: ${theme.typeface.weight.bold};

  &:first-child {
    margin-top: 0;
  }
`;

export const H1Style = css`
  ${common};
`;

export const H2Style = css`
  ${common};
`;

export const H3Style = css`
  ${common};
`;

export const H4Style = css`
  ${common};
`;

export const H5Style = css`
  ${common};
`;

export const H6Style = css`
  ${common};
`;
