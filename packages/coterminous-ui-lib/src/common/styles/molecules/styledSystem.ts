import { css } from 'styled-components';
import {
  display,
  space,
  width,
  SpaceProps,
  WidthProps,
  DisplayProps,
} from 'styled-system';

export type StyleSystemProps = SpaceProps & WidthProps & DisplayProps;

export const styleSystem = css`
  ${space}
  ${width}
  ${display}
`;
