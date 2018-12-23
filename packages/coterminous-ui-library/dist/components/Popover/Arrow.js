'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const popover_style_1 = require('./popover.style');
const styled_components_1 = require('styled-components');
class ArrowBase extends React.Component {
  render() {
    return React.createElement('div', {
      ref: this.props.passedRef,
      style: this.props.style,
      className: this.props.className,
      'data-placement': this.props.placement,
    });
  }
}
exports.Arrow = styled_components_1.default(ArrowBase)`
  ${popover_style_1.arrowStyle};
`;
