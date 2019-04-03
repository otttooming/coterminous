import * as React from 'react';
import { PhotoSwipe, PhotoSwipeGalleryItem } from 'react-photoswipe';
import Image from '../Image';
import { Section } from '../Section/Section';
import { Lightbox as LightboxStyled } from './Lightbox.style';

interface ImageSizes {
  height: number;
  width: number;
  url: string;
}
export interface MediaItemProps {
  width: number;
  height: number;
  aspectRatio: number;
  sizes: ImageSizes[];
}

interface PhotoSwipeGalleryOptions {
  history: boolean;
}

interface Props {
  images: MediaItemProps[];
  options: PhotoSwipeGalleryOptions;
  isOpen: boolean;
  onClose: () => void;
}

class Lightbox extends React.PureComponent<Props, any> {
  static defaultProps = {
    images: [],
    options: {
      history: false,
    },
    isOpen: false,
    onClose: () => {},
  };

  buildGalleryItems = (images: MediaItemProps[]): PhotoSwipeGalleryItem[] => {
    return images.map(({ width: w, height: h, sizes }) => {
      return {
        title: '',
        src: sizes.reduce((prev, current) =>
          prev.width > current.width ? prev : current,
        ).url,
        thumbnail: sizes.reduce((prev, current) =>
          prev.width < current.width ? prev : current,
        ).url,
        w,
        h,
      };
    });
  };

  handleImageClick = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const { options, isOpen, images, onClose } = this.props;

    const isEmpty: boolean = !images.length;

    if (isEmpty) {
      return null;
    }

    const image = {
      width: 1200,
      height: 1200,
      aspectRatio: 100,
      sizes: [
        {
          url: 'https://dummyimage.com/1200x1200/fff/aaa',
          width: 1200,
          height: 1200,
        },
      ],
    };

    const gallery = this.buildGalleryItems(images);

    return (
      <>
        <Section>
          <Image image={image} onClick={this.handleImageClick} />
        </Section>

        <LightboxStyled>
          <PhotoSwipe
            isOpen={isOpen}
            items={gallery}
            options={options}
            onClose={onClose}
          />
        </LightboxStyled>
      </>
    );
  }
}

export default Lightbox;
