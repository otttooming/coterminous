import { ENDPOINT, SITE } from '../getUrl';
import { getAllMedia } from '../getMedia/';
import { fetchRequest } from '../fetchRequest';
import { Parameters, GetUrlProps } from '../getUrl/getUrl';
import { ResponseMetaProps } from '../fetchRequest/fetchRequest';
import { MediaItemProps } from '../getMedia/getMedia';

export interface ProductListParameters extends Parameters {
  page?: number;
  category?: string;
  include?: number[];
  before?: string;
  in_stock?: boolean;
  status?: string;
  per_page?: number;
}

interface Props {
  parameters: ProductListParameters;
}

export interface SingleProductImage {
  id: number;
}

export interface SingleProductProps {
  id: number;
  name: string;
  slug: string;
  date_created_gmt: string;
  images: SingleProductImage[];
  price: number;
  variations: number[];
}

export interface ProductListItem {
  product: SingleProductProps;
  images: MediaItemProps[];
}

export interface ProductList {
  list: ProductListItem[];
  meta: ResponseMetaProps;
}

export async function getProductList({
  parameters,
}: Props): Promise<ProductList | null> {
  const defaultParameters: ProductListParameters = {
    page: 1,
    in_stock: true,
    status: 'publish',
    per_page: 16,
  };

  const url: GetUrlProps = {
    host: SITE,
    paths: [ENDPOINT.WC, 'products'],
    parameters: { ...defaultParameters, ...parameters },
  };

  const response = await fetchRequest<SingleProductProps[]>({ url });

  if (!response) {
    return null;
  }

  const { payload, meta } = response;

  const list: ProductListItem[] = await Promise.all(
    payload.map(product => getProductsItem(product)),
  );

  return {
    list,
    meta,
  };
}

export async function getProductsItem(
  product: SingleProductProps,
): Promise<ProductListItem> {
  const { images: productImages } = product;

  const getImageId = ({ id }: SingleProductProps) => id;
  const removeWCPlaceholderImage = (id: number) => id !== 0;

  const ids = productImages.map(getImageId).filter(removeWCPlaceholderImage);
  const images = await getAllMedia(ids);

  return {
    product,
    images,
  };
}
