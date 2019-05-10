import { getMedia, MediaItemProps } from './getMedia';

export async function getAllMedia(ids: number[]): Promise<MediaItemProps[]> {
  const getImageWithSrcsetAttributes = (id: number) => getMedia(id);

  const mediaItems = ids.map(getImageWithSrcsetAttributes);

  return Promise.all(mediaItems);
}
