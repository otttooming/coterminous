'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/* tslint:disable */
const styledComponents = require('styled-components');
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const styled_components_1 = require('styled-components');
exports.Styles = styled_components_1.Styles;
exports.StyledComponentClass = styled_components_1.StyledComponentClass;
exports.InterpolationFunction = styled_components_1.InterpolationFunction;
exports.ThemeProps = styled_components_1.ThemeProps;
const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents;
exports.styled = styled;
exports.css = css;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.createGlobalStyle = createGlobalStyle;
