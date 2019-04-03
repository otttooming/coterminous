import styled, { css } from 'styled-components';
import { photoswipeStyle } from './atoms/photoswipe.style';
import Image from '../Image';

export const lightboxStyle = css`
  ${photoswipeStyle}
`;

export const Lightbox = styled.div`
  ${lightboxStyle}
`;
