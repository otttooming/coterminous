import { css } from 'styled-components';
import { theme } from '../../';
import { WrapperProps } from './Heading';

export const common = css<WrapperProps>`
  margin: ${theme.space.l} 0 0 0;
  font-weight: ${theme.fontWeight.bold};

  ${({ as }) => as === 'h1' && H1Style}
  ${({ as }) => as === 'h2' && H2Style}
  ${({ as }) => as === 'h3' && H3Style}
  ${({ as }) => as === 'h4' && H4Style}
  ${({ as }) => as === 'h5' && H5Style}
  ${({ as }) => as === 'h6' && H6Style}

  &:first-child {
    margin-top: 0;
  }
`;

export const H1Style = css``;

export const H2Style = css``;

export const H3Style = css``;

export const H4Style = css``;

export const H5Style = css``;

export const H6Style = css``;
