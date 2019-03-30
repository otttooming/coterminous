import * as React from 'react';
import Vertical from './molecules/Vertical';
import { MediaItemProps } from '../../components/Lightbox/Lightbox';

export enum CardType {
  PORTRAIT = 'PORTRAIT',
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as: keyof JSX.IntrinsicElements;
  type: CardType;
  image?: MediaItemProps;
}

class Card extends React.PureComponent<CardProps, any> {
  static defaultProps = {
    as: 'div',
    type: CardType.PORTRAIT,
  };

  public render() {
    const { ...props } = this.props;

    return <Vertical {...props} />;
  }
}

export default Card;
