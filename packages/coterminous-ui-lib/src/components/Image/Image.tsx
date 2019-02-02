import * as React from 'react';
import styled from 'styled-components';
import { MediaItemProps } from '../Lightbox/Lightbox';

interface Props {
  image: MediaItemProps;
  alt?: string;
  onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
  isProduct?: boolean;
}

interface FigureProps {
  isProduct?: boolean;
}

const Figure = styled.figure`
  background-color: ${(props: FigureProps) =>
    props.isProduct ? '#fff' : 'transparent'};
  border-radius: ${(props: FigureProps) => (props.isProduct ? '4px' : '0')};
`;

class Image extends React.Component<Props, any> {
  render() {
    const { image, alt, isProduct, onClick } = this.props;

    if (!image) {
      return (
        <Figure
          isProduct={isProduct}
          itemScope={true}
          itemProp="associatedMedia"
          itemType="http://schema.org/ImageObject"
          className="aspect-ratio"
          style={{ paddingBottom: `100%` }}
          onClick={onClick}
        >
          No image
        </Figure>
      );
    }

    const { sizes, width, height } = image;
    const srcSet = sizes.map(item => `${item.url} ${item.width}w`);

    return (
      <Figure
        isProduct={isProduct}
        itemScope={true}
        itemProp="associatedMedia"
        itemType="http://schema.org/ImageObject"
        className="aspect-ratio"
        style={{ paddingBottom: `${(width / height) * 100}%` }}
        onClick={onClick}
      >
        <img
          width={width}
          height={height}
          className="product__image aspect-ratio__img lazyloaded"
          alt={alt}
          itemProp="thumbnail"
          srcSet={srcSet.join()}
        />
      </Figure>
    );
  }
}

export default Image;
