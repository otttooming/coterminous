import Bottleneck from 'bottleneck';
import { getProductListing } from '@coterminous/wp-lib';
import { ProductListing } from '@coterminous/wp-lib/dist/components/getProduct/getProductListing';
import {
  PageInfo,
  ProductNode,
  ProductsListingQueryArgs,
  Product,
  ProductImages,
} from '../../codegen/types';
import { MediaItemProps } from '@coterminous/wp-lib/dist/components/getMedia/getMedia';

const requestLimiter = new Bottleneck({
  reservoir: 100,
  reservoirRefreshAmount: 100,
  reservoirRefreshInterval: 60 * 1000,

  maxConcurrent: 1,
  minTime: 333,
});

async function getConnection(props: ProductsListingQueryArgs) {
  const { page = 1, first = 16, before } = props;

  const response = await requestLimiter.schedule(() =>
    getProductListing({
      parameters: { page, before, per_page: first },
    }),
  );

  return {
    pageInfo: getPageInfo(response),
    edges: getEdges(props, response),
  };
}

function getEdges(
  props: ProductsListingQueryArgs,
  response: ProductListing,
): ProductNode[] {
  const { before } = props;

  return response.listing.map<ProductNode>(
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

function getPageInfo(response: ProductListing): PageInfo {
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

const Product = {
  Query: {
    productsListing: (channel, props) => getConnection(props),
  },
};

export default Product;
