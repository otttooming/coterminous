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

export type StyleSystemProps = WidthProps & MaxWidthProps & DisplayProps;

export const styleSystem = css`
  ${width}
  ${maxWidth}
  ${display}
`;

export type WithSpaceProps = SpaceProps;

const topSpacing = css`
  margin-top: ${theme.space.m};

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
`;
