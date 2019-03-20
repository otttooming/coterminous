import { css } from 'styled-components';
import { SpacingSize } from '../constants';

type Space = SpacingSize;

export interface ComponentSpacingProps {
  m?: Space;
  ml?: Space;
  mr?: Space;
  mt?: Space;
  mb?: Space;
}

export const componentSpacing = css<ComponentSpacingProps>`
  ${({ ml }) => ml === SpacingSize.HUGE && 'margin-left: 16px'}
`;
