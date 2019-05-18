import { getParameters } from './getUrl.helper';

export type ParameterValue =
  | number
  | number[]
  | string
  | string[]
  | boolean
  | undefined;

export interface Parameters {
  [key: string]: ParameterValue;
}

export const WP_MAIN_MENU_ID = 828;

export interface GetUrlProps {
  site: SiteProps;
  paths: string[];
  parameters?: Parameters;
}

interface SiteProps {
  host: string;
  consumerKey: string;
  consumerSecret: string;
}

export function getUrl(props: GetUrlProps) {
  const { site, paths = [], parameters = {} } = props;

  const path = [site.host, 'wp-json', ...paths].join('/');
  const params: string[] = getParameters(parameters);

  const parameter = [
    ...params,
    `consumer_key=${site.consumerKey}`,
    `consumer_secret=${site.consumerSecret}`,
  ].join('&');

  return `${path}/?${parameter}`;
}
