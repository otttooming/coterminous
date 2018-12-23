import * as React from 'react';

/* tslint:disable */
import * as styledComponents from 'styled-components';

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  ThemedStyledComponentsModule, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
  StyledComponentClass, // Required for tsconfig declaration export
  InterpolationFunction, // Required for tsconfig declaration export
  ThemeProps, // Required for tsconfig declaration export
  // @ts-ignore
  createGlobalStyle,
} from 'styled-components';
/* tslint:enable */

import { CoterminousStyledThemeProps } from './theme';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents as any;

// const {
//   default: styled,
//   css,
//   keyframes,
//   ThemeProvider,
// } = styledComponents as ThemedStyledComponentsModule<
//   CoterminousStyledThemeProps
// >;

export {
  styled,
  css,
  keyframes,
  ThemeProvider,
  Styles,
  StyledComponentClass,
  InterpolationFunction,
  ThemeProps,
  CoterminousStyledThemeProps,
  createGlobalStyle,
};
