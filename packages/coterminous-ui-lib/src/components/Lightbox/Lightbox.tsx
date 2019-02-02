import * as React from 'react';
import { PhotoSwipe, PhotoSwipeGalleryItem } from 'react-photoswipe';

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

class Lightbox extends React.Component<Props, any> {
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

  render() {
    const { options, isOpen, images, onClose } = this.props;

    const isEmpty: boolean = !images.length;

    if (isEmpty) {
      return null;
    }

    const gallery = this.buildGalleryItems(images);

    return (
      <PhotoSwipe
        isOpen={isOpen}
        items={gallery}
        options={options}
        onClose={onClose}
      />
    );
  }
}

export default Lightbox;
