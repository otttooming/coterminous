'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const __1 = require('../../');
const styled_components_1 = require('styled-components');
const common = styled_components_1.css`
  background-color: ${__1.theme.background.section};
  border-radius: ${__1.theme.border.radius.small};
  margin-bottom: ${__1.theme.spacing.normal};
  padding: ${__1.theme.spacing.large};
`;
exports.sectionStyle = styled_components_1.css`
  ${common};
`;
