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
  outline: none;

  &:focus {
    box-shadow: 0 0 0 3px rgba(23, 198, 113, 0.15),
      0 3px 15px rgba(23, 198, 113, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
  }
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
        size: 100,
      };
    });
  };

  onMouseLeave(e: React.SyntheticEvent<HTMLButtonElement>) {
    this.setState({
      x: 0,
      y: 0,
      size: 0,
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

const GlowBase: React.StatelessComponent<GlowProps> = ({
  x,
  y,
  size,
  className,
  children,
}) => {
  const isGlowVisible: boolean = size !== 0;

  const inlineStyle = {
    left: `${x}px`,
    top: `${y}px`,
    width: `${size}px`,
    height: `${size}px`,
  };

  const style = isGlowVisible ? inlineStyle : undefined;

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
};

export const Glow = styled(GlowBase)`
  ${StyledGlow};
  pointer-events: none;
`;

export const Button = styled<any>(ButtonBase)`
  ${StyledButton};
`;
