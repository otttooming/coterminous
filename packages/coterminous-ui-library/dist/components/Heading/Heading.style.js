'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const __1 = require('../../');
const common = __1.css`
  margin: 0 0 ${props => props.theme.spacing.medium} 0;
  font-weight: ${props => props.theme.typeface.weight.bold};
`;
exports.H1Style = __1.css`
  ${common};
`;
exports.H2Style = __1.css`
  ${common};
`;
exports.H3Style = __1.css`
  ${common};
`;
exports.H4Style = __1.css`
  ${common};
`;
exports.H5Style = __1.css`
  ${common};
`;
exports.H6Style = __1.css`
  ${common};
`;
