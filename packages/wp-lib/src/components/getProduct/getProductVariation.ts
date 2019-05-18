import { ENDPOINT, SITE } from '../getUrl';
import fetchRequest from '../fetchRequest';
import { GetUrlProps } from '../getUrl/getUrl';
import { SingleProductProps } from './getProductList';

export interface ProductVariation {
  id: number;
  price: string;
  attributes: any;
  name: string;
}

async function getSingleVariation(
  productId: number,
  variationId: number,
): Promise<ProductVariation | null> {
  const url: GetUrlProps = {
    site: SITE,
    paths: [
      ENDPOINT.WC,
      'products',
      String(productId),
      'variations',
      String(variationId),
    ],
  };

  const response = await fetchRequest<ProductVariation>({ url });

  if (!response) {
    return null;
  }

  const { payload } = response;

  return payload;
}

async function getAllVariations(
  productId: number,
  ids: number[],
): Promise<Array<ProductVariation | null>> {
  const variationItems = ids.map(id => getSingleVariation(productId, id));

  return Promise.all(variationItems);
}

export async function getProductVariations(
  product: SingleProductProps,
  ids: number[],
): Promise<ProductVariation[]> {
  const { id: productId } = product;

  const variations = await getAllVariations(productId, ids);
  const filteredVariations: ProductVariation[] = variations.filter<
    ProductVariation
  >((item): item is ProductVariation => typeof item !== null);
  const syntheticVariation = createSyntheticVariation(product);

  return [syntheticVariation, ...filteredVariations];
}

function createSyntheticVariation(
  product: SingleProductProps,
): ProductVariation {
  const { id } = product;

  const variation: ProductVariation = {
    id,
    price: '',
    attributes: [],
    name: '',
  };

  return variation;
}
