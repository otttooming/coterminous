import * as React from 'react';
import { Image, theme } from '../../../';
import styled from 'styled-components';
import { CardProps } from '../Card';

export interface VerticalProps extends CardProps {}

const Wrapper = styled.div`
  /* background-color: ${theme.background.section}; */
  /* box-shadow: 0px 16px 25px 0px rgba(118, 88, 198, 0.1); */
`;

const ChildrenWrapper = styled.div`
  overflow: hidden;
  border-radius: ${theme.border.radius.small};
`;

const Footer = styled.div`
  padding-top: ${theme.spacing.normal};
`;

class Vertical extends React.Component<VerticalProps, any> {
  public render() {
    const { as, content, children, ...restProps } = this.props;

    return (
      <Wrapper as={as} {...restProps}>
        {!!children && <ChildrenWrapper>{children}</ChildrenWrapper>}

        {!!content && <Footer>{content}</Footer>}
      </Wrapper>
    );
  }
}

export default Vertical;
