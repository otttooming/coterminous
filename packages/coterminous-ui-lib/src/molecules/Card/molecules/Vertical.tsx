import * as React from 'react';
import { Image, theme } from '../../../';
import styled from 'styled-components';
import { CardProps } from '../Card';

export interface VerticalProps extends CardProps {}

const Wrapper = styled.div`
  background-color: ${theme.background.section};
  border-radius: ${theme.border.radius.small};
  box-shadow: 0px 16px 25px 0px rgba(118, 88, 198, 0.1);
  overflow: hidden;
`;

const Footer = styled.div`
  padding: ${theme.spacing.large};
`;

class Vertical extends React.Component<VerticalProps, any> {
  public render() {
    const { as, footer, image, ...restProps } = this.props;

    return (
      <Wrapper as={as} {...restProps}>
        {!!image && <Image image={image} />}

        {!!footer && <Footer>{footer}</Footer>}
      </Wrapper>
    );
  }
}

export default Vertical;
