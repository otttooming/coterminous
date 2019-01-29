import * as React from 'react';
import styled from 'styled-components';

export const Checkmark = styled.span`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  color: #fff;
  &:after {
    content: '';
    display: block;
    width: 3px;
    height: 6px;
    border-style: solid;
    border-color: inherit;
    border-width: 0 2px 2px 0;
    transform: rotate(44deg) translate3d(-50%, 50%, 0);
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% + 2px);
  }
`;
