'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const styled_components_1 = require('styled-components');
const ControlWrapper_1 = require('../ControlWrapper/ControlWrapper');
const __1 = require('../../');
const controlWrapperHelper_1 = require('../ControlWrapper/controlWrapperHelper');
const downshift_1 = require('downshift');
const select_style_1 = require('./select.style');
var SELECT_GROUP;
(function(SELECT_GROUP) {
  SELECT_GROUP['NOT_GROUPED'] = 'NOT_GROUPED';
})((SELECT_GROUP = exports.SELECT_GROUP || (exports.SELECT_GROUP = {})));
class SelectBase extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { selected: undefined };
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
    this.renderDropdownItem = item => {
      if (!item) {
        return null;
      }
      if (!item.meta) {
        return item.label;
      }
      return React.createElement(
        'div',
        null,
        item.label,
        React.createElement('ul', null, item.meta.map(({ label }) => label)),
      );
    };
    this.handleDownshiftChange = selected => {
      const { onChange } = this.props;
      if (onChange) {
        onChange(!selected ? undefined : selected.value);
      }
      this.setState({ selected });
    };
    this.handleFocus = (setState, clearSelection) => () => {
      if (clearSelection) {
        clearSelection();
      }
      setState({ isOpen: true });
    };
    this.getFilteredResults = inputValue => item => {
      const { searchTerms, label } = item;
      if (!inputValue || !searchTerms) {
        return true;
      }
      const searchTermLabels = searchTerms.map(term => term.label);
      searchTermLabels.push(label);
      return !!searchTermLabels.join(' ').match(new RegExp(inputValue, 'gi'));
    };
  }
  render() {
    const { items, className } = this.props;
    return this.renderControlWrapper(
      React.createElement(
        downshift_1.default,
        {
          onChange: this.handleDownshiftChange,
          itemToString: item => (!!item ? item.label : ''),
          stateReducer: this.stateReducer,
        },
        options => {
          const { getInputProps, isOpen, setState } = options;
          return React.createElement(
            'div',
            null,
            React.createElement(
              __1.Popover,
              {
                isOpen: isOpen,
                popoverChildren: () =>
                  this.renderPopoverChildren(options, items),
              },
              ({ ref }) =>
                React.createElement(
                  'input',
                  Object.assign(
                    { ref: ref, className: className },
                    getInputProps(),
                    { onFocus: this.handleFocus(setState) },
                  ),
                ),
            ),
          );
        },
      ),
    );
  }
  renderPopoverChildren(options, items) {
    const { inputValue } = options;
    const ob = {};
    const reduc = items
      .filter(this.getFilteredResults(inputValue))
      .reduce((acc, cur, index) => {
        const item = this.renderSelectItem(options, cur, index);
        const newAcc = Object.assign({}, acc);
        if (!cur.group && !newAcc[SELECT_GROUP.NOT_GROUPED]) {
          newAcc[SELECT_GROUP.NOT_GROUPED] = [item];
          return newAcc;
        }
        if (!cur.group) {
          newAcc[SELECT_GROUP.NOT_GROUPED] = [
            ...acc[SELECT_GROUP.NOT_GROUPED],
            item,
          ];
          return newAcc;
        }
        if (!acc[cur.group.label]) {
          newAcc[cur.group.label] = [item];
          return newAcc;
        }
        newAcc[cur.group.label] = [...acc[cur.group.label], item];
        return newAcc;
      }, ob);
    const groupedItems = Object.entries(reduc).map((arr, index) => {
      return React.createElement(
        'div',
        { key: index },
        React.createElement('h1', null, arr[0]),
        React.createElement('ul', null, arr[1]),
      );
    });
    return React.createElement('div', null, groupedItems);
  }
  renderSelectItem(options, selectItem, index) {
    const { getItemProps, highlightedIndex, selectedItem } = options;
    return React.createElement(
      'div',
      Object.assign(
        {},
        getItemProps({
          key: index,
          index,
          item: selectItem,
          style: {
            backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
            fontWeight: selectedItem === selectItem ? 'bold' : 'normal',
          },
        }),
      ),
      this.renderDropdownItem(selectItem),
    );
  }
  stateReducer(state, changes) {
    switch (changes.type) {
      case downshift_1.default.stateChangeTypes.blurInput:
        return Object.assign({}, changes, { isOpen: false });
      default:
        return changes;
    }
  }
}
exports.SelectBase = SelectBase;
exports.Select = styled_components_1.default(SelectBase)`
  ${select_style_1.selectInputStyle};
`;
