import { ENDPOINT, SITE } from '../getUrl';
import { getAllMedia } from '../getMedia/';
import { fetchRequest } from '../fetchRequest';
import { Parameters, GetUrlProps } from '../getUrl/getUrl';
import { ResponseMetaProps } from '../fetchRequest/fetchRequest';

export interface ProductListingParameters extends Parameters {
  page?: number;
  category?: string;
  include?: number[];
  before?: string;
  in_stock?: boolean;
  status?: string;
  per_page?: number;
}

interface Props {
  parameters: ProductListingParameters;
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
}

export interface ProductListingItem {
  product: SingleProductProps;
  images: any;
}

export interface ProductListing {
  listing: ProductListingItem[];
  meta: ResponseMetaProps;
}

export async function getProductListing({
  parameters,
}: Props): Promise<ProductListing | null> {
  const defaultParameters: ProductListingParameters = {
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
  console.log(url, response);

  if (!response) {
    return null;
  }

  const { payload, meta } = response;

  const listing: ProductListingItem[] = await Promise.all(
    payload.map(product => getProductsItem(product)),
  );

  return {
    listing,
    meta,
  };
}

async function getProductsItem(
  product: SingleProductProps,
): Promise<ProductListingItem> {
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
