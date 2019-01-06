import { ENDPOINT, SITE, getUrl } from '../getUrl';
import { getAllMedia } from '../getMedia/';
import { fetchRequest } from '../fetchRequest';
import { Parameters } from '../getUrl/getUrl';

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

export interface SingleProductProps {
  id: number;
  name: string;
  date_created_gmt: string;
  images: any;
}

export interface ProductListingItem {
  product: SingleProductProps;
  images: any;
}

export interface ProductListing {
  listing: ProductListingItem[];
  totalPages: number;
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

  const url = getUrl(
    {
      paths: [ENDPOINT.WC, 'products'],
      parameters: { ...defaultParameters, ...parameters },
    },
    SITE,
  );

  const response = await fetchRequest<SingleProductProps[]>({ url });
  console.log(url, response);

  if (!response) {
    return null;
  }

  const { payload, meta } = response;
  const { totalPages } = meta;

  const listing: ProductListingItem[] = await Promise.all(
    payload.map(item => getProductsItem(item)),
  );

  return {
    listing,
    totalPages,
  };
}

async function getProductsItem(
  product: SingleProductProps,
): Promise<ProductListingItem> {
  const imageIds = product.images
    .map((item: any) => item.id)
    .filter((item: any) => item !== 0);

  const images = await getAllMedia(imageIds);

  return {
    product,
    images,
  };
}
