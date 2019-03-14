import * as React from 'react';
import { Image, theme } from '../../../';
import styled from 'styled-components';
import { CardProps } from '../Card';

export interface VerticalProps extends CardProps {}

const Wrapper = styled.div`
  background-color: ${theme.background.section};
  border-radius: ${theme.border.radius.small};
  margin-top: ${theme.spacing.large};
  box-shadow: 0px 16px 25px 0px rgba(118, 88, 198, 0.1);
  max-width: 320px;
  overflow: hidden;
`;

const Footer = styled.div`
  padding: ${theme.spacing.large};
  max-width: 320px;
`;

class Vertical extends React.Component<VerticalProps, any> {
  public render() {
    const { as, footer, image } = this.props;

    return (
      <Wrapper as={as}>
        {!!image && <Image image={image} />}

        {!!footer && <Footer>{footer}</Footer>}
      </Wrapper>
    );
  }
}

export default Vertical;
