import { getMedia, MediaItemProps } from './getMedia';

export async function getAllMedia(
  ids: number[],
): Promise<Array<MediaItemProps | undefined>> {
  const getImageWithSrcsetAttributes = (id: number) => getMedia(id);

  const mediaItems = ids.map(getImageWithSrcsetAttributes);

  return Promise.all(mediaItems);
}
