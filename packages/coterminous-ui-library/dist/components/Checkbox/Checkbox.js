'use strict';
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const checkbox_style_1 = require('./checkbox.style');
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require('coterminous-styled');
const ControlWrapper_1 = require('../ControlWrapper/ControlWrapper');
const controlWrapperHelper_1 = require('../ControlWrapper/controlWrapperHelper');
var CheckboxType;
(function(CheckboxType) {
  CheckboxType['CHECKBOX'] = 'checkbox';
  CheckboxType['RADIO'] = 'radio';
})((CheckboxType = exports.CheckboxType || (exports.CheckboxType = {})));
class CheckboxBase extends React.Component {
  constructor(props) {
    super(props);
    this.renderControlWrapper = element => {
      const { label } = this.props;
      return React.createElement(
        ControlWrapper_1.ControlWrapper,
        Object.assign(
          {},
          controlWrapperHelper_1.extractControlWrapperProps(this.props),
        ),
        element,
      );
    };
    this.handleChange = event => {
      const { onChange, value } = this.props;
      const checked = Boolean(event.currentTarget.checked);
      this.setState({
        isChecked: checked,
      });
      if (onChange) {
        onChange(checked ? value : undefined);
      }
    };
    this.state = {
      isChecked: false,
    };
  }
  render() {
    const _a = this.props,
      { className, children, inputLabel, type, name, checked } = _a,
      restProps = __rest(_a, [
        'className',
        'children',
        'inputLabel',
        'type',
        'name',
        'checked',
      ]);
    const { isChecked } = this.state;
    const attributes = { className, name };
    return this.renderControlWrapper(
      React.createElement(
        checkbox_style_1.CheckboxLabelWrapper,
        null,
        React.createElement(
          checkbox_style_1.InputWrapperStyle,
          null,
          (type === CheckboxType.RADIO ? checked : this.state.isChecked) &&
            React.createElement(coterminous_styled_1.CSSIcons.Checkmark, null),
        ),
        React.createElement(
          checkbox_style_1.HiddenInput,
          Object.assign({ type: type }, attributes, {
            checked: this.props.checked,
            onChange: this.handleChange,
          }),
        ),
        React.createElement('span', null, inputLabel),
      ),
    );
  }
}
CheckboxBase.defaultProps = {
  type: CheckboxType.CHECKBOX,
};
exports.Checkbox = coterminous_styled_1.styled(CheckboxBase)`
  ${checkbox_style_1.CheckboxStyle};
`;
