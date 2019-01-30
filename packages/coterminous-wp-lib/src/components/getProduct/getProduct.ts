import { ENDPOINT, SITE, getUrl } from '../getUrl';
import { fetchRequest } from '../fetchRequest';
import { GetUrlProps } from '../getUrl/getUrl';
import { SingleProductProps, getProductsItem } from './getProductList';
import { MediaItemProps } from '../getMedia/getMedia';

export interface SingleProductVariationProps {
  id: number;
  price: string;
  attributes: any;
  name: string;
}

export interface Product {
  product: SingleProductProps;
  images: MediaItemProps[];
}

export async function getSingleProduct(id: number): Promise<Product | null> {
  const url: GetUrlProps = {
    host: SITE,
    paths: [ENDPOINT.WC, 'products', String(id)],
  };

  const response = await fetchRequest<SingleProductProps>({ url });

  if (!response) {
    return null;
  }

  const { payload } = response;

  const data = getProductsItem(payload);

  return data;
}
