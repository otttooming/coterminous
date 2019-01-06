import { getMedia } from './getMedia';

export async function getAllMedia(ids: number[]) {
  const mediaItems = ids.map((id: number) => getMedia(id));

  return Promise.all(mediaItems);
}
