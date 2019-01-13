import 'isomorphic-unfetch';
import { GetUrlProps, getUrl } from '../getUrl/getUrl';

interface Props {
  url: GetUrlProps;
  options?: Options;
}

export interface ResponseMetaProps {
  url: GetUrlProps;
  options?: Options;
  totalPages: number;
}

interface Response<P> {
  payload: P;
  meta: ResponseMetaProps;
}

interface Options {
  type: FETCH_TYPE;
}

export enum FETCH_TYPE {
  JSON = 'JSON',
  TEXT = 'TEXT',
}

export async function fetchRequest<P>({
  url,
  options,
}: Props): Promise<Response<P> | null> {
  try {
    const requestUrl: string = getUrl(url);

    const response = await fetch(requestUrl);
    const payload =
      options && options.type && options.type === FETCH_TYPE.TEXT
        ? await response.text()
        : await response.json();

    const headers = response.headers;

    const wpTotalPages = headers.get('X-WP-TotalPages');

    const totalPages = parseInt(wpTotalPages || '0', 10);

    const meta: ResponseMetaProps = { totalPages, url };

    const data: Response<P> = { payload, meta };

    return data;
  } catch (error) {
    return null;
  }
}
