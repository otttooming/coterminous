import { theme } from '../../';
import { css } from 'styled-components';

const common = css`
  background-color: ${theme.background.section};
  border-radius: ${theme.border.radius.small};
  margin-top: ${theme.spacing.normal};
  padding: ${theme.spacing.large};
  box-shadow: 0px 16px 25px 0px rgba(118, 88, 198, 0.1);

  &:first-child {
    margin-top: 0;
  }
`;

export const sectionStyle = css`
  ${common};
`;
