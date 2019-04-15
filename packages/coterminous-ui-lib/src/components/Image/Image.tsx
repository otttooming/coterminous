import * as React from 'react';
import styled from 'styled-components';
import { MediaItemProps } from '../Lightbox/Lightbox';

interface Props {
  image: MediaItemProps;
  alt?: string;
  onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
}

const Figure = styled.figure`
  background-color: #fff;
  border-radius: 8px;
`;

class Image extends React.PureComponent<Props, any> {
  render() {
    const { image, alt, onClick } = this.props;
    const { sizes, width, height } = image;
    const srcSet = sizes.map(item => `${item.url} ${item.width}w`).join();

    return (
      <Figure
        className="aspect-ratio"
        style={{ paddingBottom: `${(height / width) * 100}%` }}
        onClick={onClick}
      >
        <img
          width={width}
          height={height}
          className="aspect-ratio__img lazyloaded"
          alt={alt}
          itemProp="thumbnail"
          srcSet={srcSet}
        />
      </Figure>
    );
  }
}

export default Image;
