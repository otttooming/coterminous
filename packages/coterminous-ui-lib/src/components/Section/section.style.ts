import { theme } from '../../';
import { css } from 'styled-components';

const common = css`
  background-color: ${theme.backgroundColor.secondary};
  border-radius: ${theme.borderRadius.s};
  margin-top: ${theme.space.l};
  padding: ${theme.space.l};

  &:first-child {
    margin-top: 0;
  }
`;

export const sectionStyle = css`
  ${common};
`;
