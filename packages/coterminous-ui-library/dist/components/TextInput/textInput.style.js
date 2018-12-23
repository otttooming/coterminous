'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const __1 = require('../../');
const styled_components_1 = require('styled-components');
const reset = styled_components_1.css`
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  color: inherit;
  font-size: inherit;
  &:focus {
    outline: none;
  }
`;
const common = styled_components_1.css`
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  padding-left: ${__1.theme.spacing.medium};
  border-radius: ${__1.theme.border.radius.small};
  background-color: ${__1.theme.background.input};
`;
exports.TextInputStyle = styled_components_1.css`
  ${reset};
  ${common};
  line-height: 48px;
  height: 48px;
`;
