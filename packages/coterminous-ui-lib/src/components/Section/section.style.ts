import { theme } from '../../';
import { css } from 'styled-components';

const common = css`
  background-color: ${theme.background.section};
  border-radius: ${theme.border.radius.small};
  margin-bottom: ${theme.spacing.normal};
  padding: ${theme.spacing.large};
  box-shadow: 0px 16px 25px 0px rgba(118, 88, 198, 0.1);
`;

export const sectionStyle = css`
  ${common};
`;
