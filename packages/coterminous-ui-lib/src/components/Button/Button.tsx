import * as React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../';
import {
  styleSystem,
  StyleSystemProps,
} from '../../common/styles/molecules/styledSystem';

export enum ButtonSize {
  NORMAL = 'normal',
  LARGE = 'large',
  SMALL = 'small',
}

export enum ButtonType {
  NORMAL = 'normal',
  FLAT = 'flat',
}

const large = css`
  padding: 24px 32px;
  font-size: 1.5em;
`;

const normal = css`
  padding: 16px 24px;
  font-size: 1.25em;
`;

const small = css`
  padding: 8px 16px;
  font-size: 1em;
`;

const normalType = css`
  color: #fff;

  background: #7f00ff;
  /* box-shadow: 0 4px 16px 0 rgba(44, 44, 44, 0.26); */
  /* background: linear-gradient(to right, #7f00ff, #e100ff); */

  &:focus {
    box-shadow: 0 0 0 3px rgba(127, 0, 255, 0.3);
  }
`;

const flatType = css`
  color: #333;
  background: transparent;
  padding-right: 0;
  padding-left: 0;
  min-width: 0;
`;

const topSpacing = css`
  &:first-child {
    margin-top: 0;
  }
`;

const defaultSpacing = css<StyleProps>`
  margin-top: ${theme.spacing.medium};

  ${({ m, mt }) => !Boolean(m) && !Boolean(mt) && topSpacing}
`;

const StyledButton = styled.button<any>`
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 12px 24px;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  outline: none;
  min-width: 128px;
  justify-content: center;
  font-family: inherit;
  
  ${({ size }) => size === ButtonSize.SMALL && small}
  ${({ size }) => size === ButtonSize.LARGE && large}
  ${({ size }) => size === ButtonSize.NORMAL && normal}

  ${({ type }) => type === ButtonType.NORMAL && normalType}
  ${({ type }) => type === ButtonType.FLAT && flatType}

  ${defaultSpacing}
  ${styleSystem}
`;

const IconWrapper = styled.span`
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  pointer-events: none;

  > * {
    width: 100%;
    height: 100%;
  }
`;

export interface StyleProps extends StyleSystemProps {
  size: ButtonSize;
  type: ButtonType;
}

export interface Props {
  icon?: React.ReactChild;
  onClick: () => void;
}
export interface State {}

export type ButtonProps = Props & StyleProps;

class Button extends React.PureComponent<ButtonProps, State> {
  static defaultProps = {
    size: ButtonSize.NORMAL,
    type: ButtonType.NORMAL,
    onClick: () => null,
  };

  handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const { onClick } = this.props;

    event.preventDefault();

    onClick();
  };

  render() {
    const { children, icon, ...other } = this.props;

    return (
      <StyledButton {...other}>
        {icon && <IconWrapper>{icon}</IconWrapper>}

        {children}
      </StyledButton>
    );
  }
}

export default Button;
