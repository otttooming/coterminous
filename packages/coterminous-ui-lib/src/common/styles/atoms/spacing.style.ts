import { css } from 'styled-components';
import { SpacingSize } from '../constants';
import { theme } from '../theme';

type Space = SpacingSize;

export interface ComponentSpacingProps {
  m?: Space;
  ml?: Space;
  mr?: Space;
  mt?: Space;
  mb?: Space;
}

const getSpacing = (
  direction: string,
  size: SpacingSize | undefined,
): string | undefined => {
  if (!size) {
    return undefined;
  }

  return `margin-${direction}: ${theme.spacing[size]};`;
};

export const componentSpacing = css<ComponentSpacingProps>`
  ${({ ml }) => getSpacing('left', ml)}
`;
