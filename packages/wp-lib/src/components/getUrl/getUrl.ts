import { getParameters } from './getUrl.helper';

export const SITE = {
  host: 'https://dev-spiceflow.pantheonsite.io',
  consumerKey: 'ck_a67345603373570cfc213659c53f941e2dc8c64f',
  consumerSecret: 'cs_186c4d5992dab11ceb56059bccf0dc31ea77c37b',
};

export const ENDPOINT = {
  WP: 'wp/v2',
  WC: 'wc/v2',
  WP_API_MENUS: 'wp-api-menus/v2',
};

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
