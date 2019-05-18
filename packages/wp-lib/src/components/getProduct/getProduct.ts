import { ENDPOINT, SITE } from '../getUrl';
import fetchRequest from '../fetchRequest';
import { GetUrlProps } from '../getUrl/getUrl';
import { SingleProductProps } from './getProductList';
import { MediaItemProps } from '../getMedia/getMedia';
import { getAllMedia } from '../getMedia';
import { getProductVariations, ProductVariation } from './getProductVariation';

export interface Product {
  product: SingleProductProps;
  variations: ProductVariation[];
  images: MediaItemProps[];
}

export async function getProduct(id: number): Promise<Product | null> {
  const url: GetUrlProps = {
    site: SITE,
    paths: [ENDPOINT.WC, 'products', String(id)],
  };

  const response = await fetchRequest<SingleProductProps>({ url });

  if (!response) {
    return null;
  }

  const { payload } = response;

  const data = getRequiredData(payload);

  return data;
}

async function getRequiredData(product: SingleProductProps): Promise<Product> {
  const { images: productImages, variations: variationIds } = product;

  const getImageId = ({ id }: SingleProductProps) => id;
  const removeWCPlaceholderImage = (id: number) => id !== 0;

  const ids = productImages.map(getImageId).filter(removeWCPlaceholderImage);
  const images = await getAllMedia(ids);

  const variations = await getProductVariations(product, variationIds);

  return {
    product,
    variations,
    images,
  };
}
