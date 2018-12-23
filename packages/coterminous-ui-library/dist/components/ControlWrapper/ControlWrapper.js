'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const controlWrapper_style_1 = require('./controlWrapper.style');
const styled_components_1 = require('styled-components');
class ControlWrapperBase extends React.Component {
  render() {
    const { children, className, label, isRequired } = this.props;
    return React.createElement(
      'div',
      { className: className },
      React.createElement(
        controlWrapper_style_1.LabelWrapper,
        null,
        React.createElement('label', { htmlFor: '' }, label),
        isRequired && React.createElement('abbr', { title: 'required' }, '*'),
      ),
      children,
    );
  }
}
exports.ControlWrapper = styled_components_1.default(ControlWrapperBase)`
  ${controlWrapper_style_1.ControlWrapperStyle};
`;
