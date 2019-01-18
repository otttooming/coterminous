import { ENDPOINT, SITE, GetUrlProps } from '../getUrl/getUrl';
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

export async function getMedia(id: number): Promise<MediaItemProps> {
  try {
    const url: GetUrlProps = {
      host: SITE,
      paths: [ENDPOINT.WP, 'media', String(id)],
    };

    const response = await fetchRequest<MediaItemResponseTypes>({ url });

    if (!response) {
      throw Error('No response');
    }

    const { payload } = response;

    const media: MediaItemProps = {
      dimensions: {
        width: payload.media_details.width,
        height: payload.media_details.height,
        aspectRatio: calcAspectRatio(
          payload.media_details.width,
          payload.media_details.height,
        ),
      },
      imageSizes: Object.values(payload.media_details.sizes),
    };

    return media;
  } catch (error) {
    throw new Error('Could not fetch media item');
  }
}

function calcAspectRatio(width: number, height: number) {
  const aspectRatio = (height / width) * 100;

  return aspectRatio;
}
