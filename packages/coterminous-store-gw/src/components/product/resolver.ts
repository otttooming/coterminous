import Bottleneck from 'bottleneck';
import { ProductList } from '@coterminous/wp-lib/dist/components/getProduct/getProductList';
import { PageInfo } from '../../codegen/types';
import { getProductList } from './getProductList';
import { getProduct } from './getProduct';

export const requestLimiter = new Bottleneck({
  reservoir: 100,
  reservoirRefreshAmount: 100,
  reservoirRefreshInterval: 60 * 1000,

  maxConcurrent: 1,
  minTime: 333,
});

export function getPageInfo(response: ProductList): PageInfo {
  const {
    meta: { totalPages, total, hasNextPage, hasPreviousPage },
  } = response;

  return {
    hasNextPage,
    hasPreviousPage,
    total,
    totalPages,
  };
}

const ProductResolver = {
  Query: {
    productList: (channel, props) => getProductList(props),
    product: (channel, props) => getProduct(props),
  },
};

export default ProductResolver;
