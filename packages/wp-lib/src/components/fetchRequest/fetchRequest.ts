import 'isomorphic-unfetch';
import { GetUrlProps, getUrl } from '../getUrl/getUrl';

interface Props {
  url: GetUrlProps;
}

export interface ResponseMetaProps {
  url: GetUrlProps;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface ResponseProps<P> {
  payload: P;
  meta: ResponseMetaProps;
}

export async function fetchRequest<P>({
  url,
}: Props): Promise<ResponseProps<P> | null> {
  try {
    const requestUrl = getUrl(url);

    const response = await fetch(requestUrl);
    const payload = await response.json();

    const headers = response.headers;

    const wpTotalPages = headers.get('X-WP-TotalPages');
    const wpTotal = headers.get('X-WP-Total');

    const totalPages = parseInt(wpTotalPages || '0', 10);
    const total = parseInt(wpTotal || '0', 10);

    const link = headers.get('link') || '';
    const hasNextPage = link.includes('rel="next"');
    const hasPreviousPage = link.includes('rel="prev"');

    const meta: ResponseMetaProps = {
      totalPages,
      total,
      url,
      hasNextPage,
      hasPreviousPage,
    };

    const data: ResponseProps<P> = { payload, meta };

    return data;
  } catch (error) {
    return null;
  }
}
