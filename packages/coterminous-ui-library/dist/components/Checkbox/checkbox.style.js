'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const display_style_1 = require('./../../common/styles/atoms/display.style');
const __1 = require('../../');
const styled_components_1 = require('styled-components');
const common = styled_components_1.css`
  margin: 0 0 ${__1.theme.spacing.medium} 0;
`;
exports.CheckboxStyle = styled_components_1.css`
  ${common};
`;
exports.InputWrapperStyle = styled_components_1.default.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: ${__1.theme.border.radius.small};
  margin-right: ${__1.theme.spacing.medium};
`;
exports.CheckboxLabelWrapper = styled_components_1.default.label`
  display: flex;
  align-items: center;
`;
exports.HiddenInput = styled_components_1.default.input`
  ${display_style_1.visuallyHidden};
`;
