import { getUrl, ENDPOINT, SITE } from '../getUrl/getUrl';

import { MediaItemResponseTypes } from './media.types';
import { fetchRequest } from '../fetchRequest/fetchRequest';

interface Dimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

interface ImageSizes {
  file: string;
  height: number;
  width: number;
  mime_type: string;
  source_url: string;
}

export interface MediaItemProps {
  dimensions: Dimensions;
  imageSizes: ImageSizes[];
}

export async function getMedia(id: number) {
  try {
    const url = getUrl({ paths: [ENDPOINT.WP, 'media', id.toString()] }, SITE);

    const response = await fetchRequest({ url });

    if (!response) {
      throw Error('No response');
    }

    const { payload } = response;

    const data: any = { ...payload };

    const media: MediaItemProps = {
      dimensions: {
        width: data.media_details.width,
        height: data.media_details.height,
        aspectRatio: calcAspectRatio(
          data.media_details.width,
          data.media_details.height,
        ),
      },
      imageSizes: Object.values(data.media_details.sizes),
    };

    return media;
  } catch (e) {
    // tslint:disable-next-line
    console.log(e);
  }
}

function calcAspectRatio(width: number, height: number) {
  const aspectRatio = (height / width) * 100;

  return aspectRatio;
}
