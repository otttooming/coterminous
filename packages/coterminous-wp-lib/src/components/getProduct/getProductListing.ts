import { ENDPOINT, SITE, getUrl } from '../getUrl';
import { getAllMedia } from '../getMedia/';
import { fetchRequest } from '../fetchRequest';

export interface ProductListingParameters {
  before?: string;
}

export async function getProductListing(
  page: number = 1,
  category?: number | string,
  include?: number[],
  before?: string,
) {
  const categoryParameter = category ? 'category=' + category : '';
  const includeParameter = include ? `include=${include.join()}` : '';
  const beforeParameter = before ? `before=${before}` : '';

  const url = getUrl(
    {
      paths: [ENDPOINT.WC, 'products'],
      parameters: [
        'in_stock=true',
        'status=publish',
        categoryParameter,
        'page=' + page,
        'per_page=16',
        includeParameter,
        beforeParameter,
      ],
    },
    SITE,
  );

  const response = await fetchRequest({ url });

  if (!response) {
    return null;
  }

  const { payload, meta } = response;
  const { totalPages } = meta;

  const products = await Promise.all(
    payload.map((item: any) => getProductsItem(item)),
  );

  return {
    products,
    totalPages,
    category,
    page,
  };
}

async function getProductsItem(product: any) {
  const imageIds = product.images
    .map((item: any) => item.id)
    .filter((item: any) => item !== 0);

  const images = await getAllMedia(imageIds);

  return {
    product,
    images,
  };
}
