'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const __1 = require('../../');
const globalStyle_style_1 = require('./globalStyle.style');
exports.GlobalStyle = __1.createGlobalStyle`
  ${globalStyle_style_1.globalStyleCss}
`;
