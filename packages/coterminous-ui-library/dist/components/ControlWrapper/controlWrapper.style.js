'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const __1 = require('../../');
const styled_components_1 = require('styled-components');
const common = styled_components_1.css`
  margin: 0 0 ${__1.theme.spacing.medium} 0;
`;
exports.LabelWrapper = styled_components_1.default.div`
  margin-bottom: ${__1.theme.spacing.normal};
`;
exports.ControlWrapperStyle = styled_components_1.css`
  ${common};
`;
