'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_popper_1 = require('react-popper');
const popover_style_1 = require('./popover.style');
const Arrow_1 = require('./Arrow');
class PopoverBase extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      react_popper_1.Manager,
      null,
      React.createElement(react_popper_1.Reference, null, props =>
        this.props.children(props),
      ),
      this.props.isOpen &&
        React.createElement(
          react_popper_1.Popper,
          {
            placement: 'bottom',
            modifiers: {
              flip: { enabled: false },
            },
          },
          ({ ref, style, placement, arrowProps }) =>
            React.createElement(
              'aside',
              { ref: ref, style: style, 'data-placement': placement },
              React.createElement(Arrow_1.Arrow, {
                passedRef: arrowProps.ref,
                style: arrowProps.style,
                placement: placement,
              }),
              React.createElement(
                popover_style_1.Dropdown,
                { 'data-placement': placement },
                this.props.popoverChildren(),
              ),
            ),
        ),
    );
  }
}
exports.PopoverBase = PopoverBase;
exports.Popover = PopoverBase;
