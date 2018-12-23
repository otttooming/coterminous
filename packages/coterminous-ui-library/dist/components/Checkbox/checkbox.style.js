'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const display_style_1 = require('./../../common/styles/atoms/display.style');
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const __1 = require('../../');
const common = __1.css`
  margin: 0 0 ${props => props.theme.spacing.medium} 0;
`;
exports.CheckboxStyle = __1.css`
  ${common};
`;
exports.InputWrapperStyle = __1.styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: ${props => props.theme.border.radius.small};
  margin-right: ${props => props.theme.spacing.medium};
`;
exports.CheckboxLabelWrapper = __1.styled.label`
  display: flex;
  align-items: center;
`;
exports.HiddenInput = __1.styled.input`
  ${display_style_1.visuallyHidden};
`;
