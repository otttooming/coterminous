import { theme } from '../../';
import { css } from 'styled-components';

const common = css`
  background-color: ${theme.background.section};
  border-radius: ${theme.border.radius.small};
  margin-bottom: ${theme.spacing.normal};
  padding: ${theme.spacing.large};
`;

export const sectionStyle = css`
  ${common};
`;
