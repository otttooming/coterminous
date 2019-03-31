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

export type StyleSystemProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps;

export const styleSystem = css`
  ${space}
  ${width}
  ${maxWidth}
  ${display}
`;
