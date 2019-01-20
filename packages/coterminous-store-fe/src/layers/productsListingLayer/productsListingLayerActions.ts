import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import { ProductsListingQuery } from '../../generated-models';

const ns: string = 'productsListing/';

export const setProductsListingRequest = createAction(
  `${ns}SET_PRODUCTS_LISTING_REQUEST`,
);

export const setProductsListing = (data: ProductsListingQuery) => {
  console.log('====================================');
  console.log('abc', data);
  console.log('====================================');
  return (dispatch: Dispatch) => {
    console.log('====================================');
    console.log('dispatch');
    console.log('====================================');
    dispatch(setProductsListingRequest(data));
  };
};
