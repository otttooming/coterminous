interface ImageSizes {
  height: number;
  width: number;
  url: string;
}

export interface Image {
  width: number;
  height: number;
  sizes: ImageSizes[];
}
