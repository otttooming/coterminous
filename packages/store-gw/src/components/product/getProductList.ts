import Bottleneck from 'bottleneck';
import { getProductList as getWCProductList } from '@coterminous/wp-lib';
import { ProductList } from '@coterminous/wp-lib/dist/components/getProduct/getProductList';
import {
  PageInfo,
  ProductNode,
  ProductListQueryArgs,
  Product,
  ProductImages,
} from '../../codegen/types';
import { MediaItemProps } from '@coterminous/wp-lib/dist/components/getMedia/getMedia';
import { getPageInfo, requestLimiter } from './resolver';

export async function getProductList(props: ProductListQueryArgs) {
  const { page = 1, first = 16, before } = props;

  const response = await requestLimiter.schedule(() =>
    getWCProductList({
      parameters: { page, before, per_page: first },
    }),
  );

  return {
    pageInfo: getPageInfo(response),
    edges: getEdges(props, response),
  };
}

function getEdges(
  props: ProductListQueryArgs,
  response: ProductList,
): ProductNode[] {
  const { before } = props;

  return response.list.map<ProductNode>(
    ({ product: { id, name, date_created_gmt, slug }, images }) => {
      const node: Product = {
        id,
        name,
        slug,
        createdAt: date_created_gmt,
        images: getImages(images),
      };

      return {
        node,
        cursor: before ? date_created_gmt : undefined,
      };
    },
  );
}

function getImages(images: MediaItemProps[]): ProductImages[] {
  return images;
}
