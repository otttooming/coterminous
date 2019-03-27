import * as React from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import { Dropdown } from './popover.style';
import { Arrow } from './Arrow';

export type RefHandler = (ref: HTMLElement | null) => void;

export interface ReferenceChildrenProps {
  ref: RefHandler;
}

export interface Props {
  children: (props: ReferenceChildrenProps) => React.ReactNode;
  popoverChildren: () => React.ReactNode;
  isOpen: boolean;
}

export interface State {}

export type PopoverProps = Props;

export class PopoverBase extends React.PureComponent<PopoverProps, State> {
  constructor(props: PopoverProps) {
    super(props);
  }

  render() {
    return (
      <Manager>
        <Reference>{props => this.props.children(props)}</Reference>

        {this.props.isOpen && (
          <Popper
            placement="bottom"
            modifiers={{
              flip: { enabled: false },
            }}
          >
            {({ ref, style, placement, arrowProps }) => (
              <aside ref={ref} style={style} data-placement={placement}>
                <Arrow
                  passedRef={arrowProps.ref}
                  style={arrowProps.style}
                  placement={placement}
                />
                <Dropdown data-placement={placement}>
                  {this.props.popoverChildren()}
                </Dropdown>
              </aside>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
}

export const Popover = PopoverBase;
