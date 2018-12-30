export default (state = {}, action) => {
  switch (action.type) {
    case 'productListing':
      return { ...state, productListing: action.productListing };
    default:
      return state;
  }
};
