'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const styled_components_1 = require('styled-components');
const constants_1 = require('../../common/styles/constants');
const legacy_style_1 = require('./legacy.style');
exports.globalStyleCss = styled_components_1.css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    -webkit-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    line-height: 1.2;
    font-family: ${constants_1.typeface.name.primary};
    color: ${constants_1.color.white};
  }

  ${legacy_style_1.legacy};
`;
