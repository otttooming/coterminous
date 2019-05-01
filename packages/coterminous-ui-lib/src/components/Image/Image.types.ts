interface ImageSizes {
  height: number;
  width: number;
  url: string;
}

export interface ImageProps {
  width: number;
  height: number;
  sizes: ImageSizes[];
}
