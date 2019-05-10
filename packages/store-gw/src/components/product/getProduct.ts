import { getProduct as getWCProduct } from '@coterminous/wp-lib';
import { Product as WCProduct } from '@coterminous/wp-lib/dist/components/getProduct/getProduct';
import { Product, ProductQueryArgs } from '../../codegen/types';
import { requestLimiter } from './resolver';

export async function getProduct({
  id,
}: ProductQueryArgs): Promise<Product | null> {
  const response: WCProduct = await requestLimiter.schedule(() =>
    getWCProduct(id),
  );

  if (!response) {
    return null;
  }

  const {
    product: { id: wcId, name },
    images,
  } = response;

  const product: Product = {
    id: wcId,
    name,
    images,
  };

  return product;
}
