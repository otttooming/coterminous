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

export enum UrlPaths {
  PRODUCTS = 'products',
}

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

interface GetUrlProps {
  host: HostProps;
  paths?: string[];
  parameters?: Parameters;
}

interface HostProps {
  host: string;
  consumerKey: string;
  consumerSecret: string;
}

export function getUrl(props: GetUrlProps) {
  const { host, paths = [], parameters = {} } = props;

  const path = [host.host, 'wp-json', ...paths].join('/');
  const params: string[] = getParameters(parameters);

  const parameter = [
    ...params,
    `consumer_key=${host.consumerKey}`,
    `consumer_secret=${host.consumerSecret}`,
  ].join('&');

  return `${path}/?${parameter}`;
}
