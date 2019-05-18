import { GetUrlProps } from '../getUrl/getUrl';
import { MediaItemResponseTypes, Sizes } from './media.types';
import { fetchRequest } from '../fetchRequest/fetchRequest';
import { SITE, ENDPOINT } from '../../common/site';

interface ImageSizes {
  file: string;
  height: number;
  width: number;
  mimeType: string;
  url: string;
}

export interface MediaItemProps {
  width: number;
  height: number;
  sizes: ImageSizes[];
}

export async function getMedia(id: number): Promise<MediaItemProps> {
  try {
    const url: GetUrlProps = {
      site: SITE,
      paths: [ENDPOINT.WP, 'media', String(id)],
    };

    const response = await fetchRequest<MediaItemResponseTypes>({ url });

    if (!response) {
      throw Error('No response');
    }

    const { payload } = response;

    const media: MediaItemProps = {
      width: payload.media_details.width,
      height: payload.media_details.height,
      sizes: getImageSizes(payload.media_details.sizes),
    };

    return media;
  } catch (error) {
    throw new Error('Could not fetch media item');
  }
}

function getImageSizes(sizes: Sizes[]): ImageSizes[] {
  const values = Object.values(sizes);

  return values.map(
    ({ file, source_url: url, height, width, mime_type: mimeType }) => {
      return {
        file,
        url,
        mimeType,
        height,
        width,
      };
    },
  );
}
