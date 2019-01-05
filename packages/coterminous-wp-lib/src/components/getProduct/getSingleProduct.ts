import { ENDPOINT, SITE, getUrl } from '../getUrl';
import { getAllMedia } from '../getMedia/';
import { fetchRequest } from '../fetchRequest';

export interface SingleProductProps {
  product: any;
  images: any;
  variations: SingleProductVariationProps[];
}

export interface SingleProductVariationProps {
  id: number;
  price: string;
  attributes: any;
  name: string;
}

export async function getMultipleSingleProducts(slugs: string[]) {
  const requests = slugs.map(item => getSingleProduct(item));

  return Promise.all(requests);
}

export async function getSingleProduct(
  name: string,
): Promise<SingleProductProps | null> {
  const url = getUrl(
    { paths: [ENDPOINT.WC, 'products'], parameters: ['slug=' + name] },
    SITE,
  );

  const response = await fetchRequest({ url });

  if (!response) {
    return null;
  }

  const { payload } = response;

  const product = { ...payload[0] };

  const imageIds = product.images
    .map((item: any) => item.id)
    .filter((item: any) => item !== 0);

  const images = await getAllMedia(imageIds);

  const variations = await getVariations(product);

  if (!variations) {
    return null;
  }

  return { product, images, variations };
}

async function getVariations(product: any) {
  const url = getUrl(
    { paths: [ENDPOINT.WC, 'products', product.id, 'variations'] },
    SITE,
  );

  const response = await fetchRequest({ url });

  if (!response) {
    return null;
  }

  const { payload } = response;

  const data = [...payload];

  if (!data.length) {
    return buildSingleProductVariation(product);
  }

  const availableVariations = data.filter(
    (variation: any) => variation.purchasable === true,
  );

  return availableVariations;
}

function buildSingleProductVariation(product: any) {
  const variation: SingleProductVariationProps = {
    id: product.id,
    price: product.price,
    attributes: [],
    name: '',
  };

  return [variation];
}
