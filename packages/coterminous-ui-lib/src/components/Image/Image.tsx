import * as React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

interface Props {
  image: ImageProps;
  onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
}

interface WrapperProps {
  aspectRatio: string;
}

const Figure = styled.figure<WrapperProps>`
  position: relative;
  background-color: #fff;
  margin: 0;
  padding-bottom: ${({ aspectRatio }) => aspectRatio};
`;

const ImageElement = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
`;

class Image extends React.PureComponent<Props, any> {
  render() {
    const { image, onClick } = this.props;
    const { sizes, width, height } = image;
    const srcSet = sizes.map(item => `${item.url} ${item.width}w`).join();
    const aspectRatio = `${(height / width) * 100}%`;

    return (
      <Figure aspectRatio={aspectRatio} onClick={onClick}>
        <ImageElement width={width} height={height} srcSet={srcSet} />
      </Figure>
    );
  }
}

export default Image;
