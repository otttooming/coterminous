import * as React from "react";
import { Manager, Reference, Popper } from "react-popper";

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  styled,
  StyledComponentClass, // Required for tsconfig declaration export
  CoterminousStyledThemeProps, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
} from "coterminous-styled";
import {
  ControlWrapperInternalProps, // Required due to TS export requirements. https://github.com/Microsoft/TypeScript/issues/9944
  ControlWrapper,
  ControlWrapperProps,
} from "../ControlWrapper/ControlWrapper";
import { extractControlWrapperProps } from "../ControlWrapper/controlWrapperHelper";
import { Dropdown, arrowStyle } from "./popover.style";

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

export class PopoverBase extends React.Component<PopoverProps, State> {
  constructor(props: PopoverProps) {
    super(props);
  }

  render() {
    const { ...restProps } = this.props;

    const attributes = { ...restProps };

    return (
      <Manager>
        <Reference>{props => this.props.children(props)}</Reference>

        {this.props.isOpen && (
          <Popper placement="bottom">
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

interface ArrowProps {
  passedRef: (ref: HTMLElement | null) => void;
  style: React.CSSProperties;
  className?: string;
  placement: string;
}

class ArrowBase extends React.Component<ArrowProps, any> {
  render() {
    return (
      <div
        ref={this.props.passedRef}
        style={this.props.style}
        className={this.props.className}
        data-placement={this.props.placement}
      />
    );
  }
}

const Arrow = styled(ArrowBase)`
  ${arrowStyle};
`;