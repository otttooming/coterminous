import * as React from 'react';
import Vertical from './molecules/Vertical';

export enum CardType {
  PORTRAIT = 'PORTRAIT',
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as: keyof JSX.IntrinsicElements;
  type: CardType;
  content: React.ReactNode;
}

class Card extends React.PureComponent<CardProps, any> {
  static defaultProps = {
    as: 'div',
    type: CardType.PORTRAIT,
    content: null,
  };

  public render() {
    const { ...props } = this.props;

    return <Vertical {...props} />;
  }
}

export default Card;
