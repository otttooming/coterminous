import * as React from 'react';
import styled from 'styled-components';
import {
  StyleSystemProps,
  withSpace,
  WithSpaceProps,
} from '../../common/styles/molecules/styledSystem';
import { theme } from '../../common/styles/theme';
import { Omit } from 'utility-types';

const Wrapper = styled.button`
  margin: 0;
  border: 0;
  border-radius: ${theme.borderRadius.s};
  cursor: pointer;
  padding: 0 ${theme.space.l};
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  outline: none;
  min-width: ${theme.space.xl};
  justify-content: center;
  font: inherit;
  height: ${theme.space.xl};
  line-height: ${theme.space.xl};
  text-transform: uppercase;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.bold};
  background-color: ${theme.color.primary};
  color: ${theme.textColor.secondary};
  user-select: none;

  ${withSpace}
`;

interface Props {
  onClick?: () => void;
}

type PartialAttributes = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  'onClick'
>;

export type ButtonProps = Props &
  PartialAttributes &
  WithSpaceProps &
  StyleSystemProps;

const Button: React.FC<ButtonProps> = ({ children, onClick, ...restProps }) => {
  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (onClick) {
      onClick();
    }
  };

  return (
    <Wrapper {...restProps} onClick={handleClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
