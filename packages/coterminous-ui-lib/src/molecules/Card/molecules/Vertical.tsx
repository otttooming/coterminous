import * as React from 'react';
import { theme } from '../../../';
import styled from 'styled-components';
import { CardProps } from '../Card';
import { styleSystem } from '../../../common/styles/molecules/styledSystem';

export interface VerticalProps extends CardProps {}

const Wrapper = styled.div`
  ${styleSystem}
`;

const ChildrenWrapper = styled.div`
  background-color: ${theme.color.white};
  overflow: hidden;
  border-radius: ${theme.border.radius.small};
`;

const Footer = styled.div`
  padding-top: ${theme.space.s};
`;

class Vertical extends React.Component<VerticalProps, any> {
  public render() {
    const { as, content, children, ...restProps } = this.props;

    const hasNoContent = !children && !content;
    const hasOnlyChildren = !!children && !content;

    if (hasNoContent) {
      return null;
    }

    if (hasOnlyChildren) {
      return (
        <ChildrenWrapper as={as} {...restProps}>
          {children}
        </ChildrenWrapper>
      );
    }

    return (
      <Wrapper as={as} {...restProps}>
        <ChildrenWrapper>{children}</ChildrenWrapper>

        <Footer>{content}</Footer>
      </Wrapper>
    );
  }
}

export default Vertical;
