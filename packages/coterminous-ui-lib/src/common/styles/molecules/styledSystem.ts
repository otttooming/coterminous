import { css } from 'styled-components';
import {
  display,
  space,
  width,
  maxWidth,
  SpaceProps,
  WidthProps,
  MaxWidthProps,
  DisplayProps,
} from 'styled-system';
import { theme } from '../theme';

export type StyleSystemProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps;

export type WithSpaceProps = SpaceProps;

export const styleSystem = css`
  ${width}
  ${maxWidth}
  ${display}
`;

const topSpacing = css`
  margin-top: ${theme.spacing.medium};

  &:first-child {
    margin-top: 0;
  }
`;

const defaultSpacing = css<WithSpaceProps>`
  ${({ m, mt }) => !Boolean(m) && !Boolean(mt) && topSpacing}
`;

export const withSpace = css`
  ${defaultSpacing}
  ${space}
  ${styleSystem}
`;
