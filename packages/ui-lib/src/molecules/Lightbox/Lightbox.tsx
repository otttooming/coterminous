import * as React from 'react';
import { PhotoSwipe, PhotoSwipeGalleryItem } from 'react-photoswipe';
import Image from '../../atoms/Image';
import Section from '../../atoms/Section';
import { Lightbox as LightboxStyled } from './Lightbox.style';
import { Image as ImageItem } from '../../atoms/Image/Image.types';

interface PhotoSwipeGalleryOptions {
  history: boolean;
}

interface Props {
  images: ImageItem[];
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

  buildGalleryItems = (images: ImageItem[]): PhotoSwipeGalleryItem[] => {
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
          <Image {...image} onClick={this.handleImageClick} />
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