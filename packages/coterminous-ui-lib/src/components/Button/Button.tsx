import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = css`
  border: 0;
  box-shadow: 0 4px 16px 0 rgba(44, 44, 44, 0.26);
  border-radius: 4px;
  background: #7f00ff;
  background: linear-gradient(to right, #7f00ff, #e100ff);
  color: #fff;
  cursor: pointer;
  padding: 12px 24px;
  font: 400 12px/24px sans-serif;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const StyledGlow = css`
  opacity: 0.25;
  position: absolute;
  background: radial-gradient(circle closest-side, #fff, transparent);
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
`;

export interface Props {
  onClick?: () => void;
}
export interface State {
  x: number;
  y: number;
  size: number;
}

class ButtonBase extends React.Component<Props, State> {
  state = {
    x: 0,
    y: 0,
    size: 0,
  };

  private buttonElement = React.createRef<HTMLButtonElement>();

  onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!this.buttonElement.current) {
      return;
    }

    const x = e.nativeEvent.offsetX - this.buttonElement.current.clientLeft;
    const y = e.nativeEvent.offsetY - this.buttonElement.current.clientTop;
    this.setState(state => {
      return {
        ...state,
        x,
        y,
      };
    });
  };

  onMouseEnter(e: React.SyntheticEvent<HTMLButtonElement>) {
    this.setState(state => {
      return {
        ...state,
        size: 100,
      };
    });
  }

  onMouseLeave(e: React.SyntheticEvent<HTMLButtonElement>) {
    this.setState(state => {
      return {
        ...state,
        size: 0,
      };
    });
  }

  handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  };

  render() {
    const { children, ...other } = this.props;
    return (
      <button
        ref={this.buttonElement}
        onMouseMove={e => this.onMouseMove(e)}
        onMouseEnter={e => this.onMouseEnter(e)}
        onMouseLeave={e => this.onMouseLeave(e)}
        onClick={this.handleClick}
        {...other}
      >
        {children}
        <Glow {...this.state} />
      </button>
    );
  }
}

export interface GlowProps
  extends Partial<React.HTMLAttributes<HTMLSpanElement>> {
  x: number;
  y: number;
  size: number;
}

const GlowBase: React.StatelessComponent<GlowProps> = props => {
  const inlineStyle = {
    left: `${props.x}px`,
    top: `${props.y}px`,
    width: `${props.size}px`,
    height: `${props.size}px`,
  };

  return (
    <span className={props.className} style={inlineStyle}>
      {props.children}
    </span>
  );
};

export const Glow = styled(GlowBase)`
  ${StyledGlow};
`;

export const Button = styled<any>(ButtonBase)`
  ${StyledButton};
`;