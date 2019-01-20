import { combineReducers } from 'redux';
import formReducer from './formReducer';
import productsListingLayerReducer, {
  ProductsListingLayerState,
} from '../layers/productsListingLayer/productsListingLayerReducer';

const rootReducer = combineReducers({
  formReducer,
  productsListingLayerReducer,
});

export interface GlobalState {
  productsListingLayerReducer: ProductsListingLayerState;
}

export default rootReducer;
