import { theme } from '../../';
import { css } from 'styled-components';

const common = css`
  background-color: ${theme.backgroundColor.secondary};
  border-radius: ${theme.borderRadius.s};
  padding: ${theme.space.l};
`;

export const sectionStyle = css`
  ${common};
`;
