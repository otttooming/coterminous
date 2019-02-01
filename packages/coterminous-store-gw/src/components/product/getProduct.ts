import { getProduct as getWCProduct } from '@coterminous/wp-lib';
import { Product, ProductQueryArgs } from '../../codegen/types';

export async function getProduct({
  id,
}: ProductQueryArgs): Promise<Product | null> {
  const response = await getWCProduct(id);

  if (!response) {
    return null;
  }

  return response;
}
