import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

// export const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunkMiddleware)),
// );

// export const initStore = () => {
//   return store;
// };

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}

export const setProductListing = productListing => dispatch => {
  return dispatch({ type: 'productListing', productListing });
};
