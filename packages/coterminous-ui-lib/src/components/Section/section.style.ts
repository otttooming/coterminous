import { theme } from '../../';
import { css } from 'styled-components';

const common = css`
  background-color: ${theme.background.section};
  border-radius: ${theme.border.radius.small};
  margin-top: ${theme.spacing.large};
  padding: ${theme.spacing.large};

  &:first-child {
    margin-top: 0;
  }
`;

export const sectionStyle = css`
  ${common};
`;
