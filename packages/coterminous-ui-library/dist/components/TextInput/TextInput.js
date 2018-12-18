"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const textInput_style_1 = require("./textInput.style");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const ControlWrapper_1 = require("../ControlWrapper/ControlWrapper");
const controlWrapperHelper_1 = require("../ControlWrapper/controlWrapperHelper");
// Enum must be exported or 'has or is using private name' error will occur
var TagName;
(function (TagName) {
    TagName["Input"] = "input";
    TagName["TextArea"] = "textarea";
})(TagName = exports.TagName || (exports.TagName = {}));
class TextInputBase extends React.Component {
    constructor(props) {
        super(props);
        this.renderControlWrapper = (element) => {
            const { label } = this.props;
            return (React.createElement(ControlWrapper_1.ControlWrapper, Object.assign({}, controlWrapperHelper_1.extractControlWrapperProps(this.props)), element));
        };
        this.handleChange = (event) => {
            const { onChange } = this.props;
            const value = event.currentTarget.value;
            if (onChange) {
                onChange(value);
            }
        };
    }
    render() {
        const _a = this.props, { className, children, tagName = TagName.Input } = _a, restProps = __rest(_a, ["className", "children", "tagName"]);
        const attributes = Object.assign({}, restProps, { className });
        switch (tagName) {
            case TagName.Input:
                return this.renderControlWrapper(React.createElement("input", Object.assign({}, attributes, { type: "text", onChange: this.handleChange })));
            case TagName.TextArea:
                return this.renderControlWrapper(React.createElement("textarea", Object.assign({}, attributes, { onChange: this.handleChange })));
            default:
                return null;
        }
    }
}
exports.TextInput = {
    Input: coterminous_styled_1.styled(TextInputBase).attrs({
        tagName: TagName.Input,
    }) `
    ${textInput_style_1.TextInputStyle};
  `,
    TextArea: coterminous_styled_1.styled(TextInputBase).attrs({
        tagName: TagName.TextArea,
    }) `
    ${textInput_style_1.TextInputStyle};
  `,
};