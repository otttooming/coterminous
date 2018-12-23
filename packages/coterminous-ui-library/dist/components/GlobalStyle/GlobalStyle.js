'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const globalStyle_style_1 = require('./globalStyle.style');
const styled_components_1 = require('styled-components');
exports.GlobalStyle = styled_components_1.createGlobalStyle`
  ${globalStyle_style_1.globalStyleCss}
`;
