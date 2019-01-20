import * as React from 'react';
import {
  ProductsListingComponent,
  ProductsListingVariables,
  ProductsListingQuery,
} from '../../generated-models';
import { connect } from 'react-redux';

interface Props {
  variables?: ProductsListingVariables;
}

export interface StateProps {
  productsListing: ProductsListingQuery | null;
}

export interface DispatchProps {
  setProductsListing: (data: ProductsListingQuery) => void;
}

export type ProductsListingLayerProps = Props & StateProps & DispatchProps;

interface InternalState {}

class ProductsListingLayer extends React.Component<
  ProductsListingLayerProps,
  InternalState
> {
  render() {
    const {
      variables,
      children,
      productsListing,
      setProductsListing,
    } = this.props;

    return (
      <ProductsListingComponent variables={variables}>
        {({ loading, data, error }) => {
          if (typeof children === 'function') {
            return (
              <div>
                <button onClick={() => setProductsListing(data)}>abc</button>
                {children(productsListing)}
              </div>
            );
          }

          return children;
        }}
      </ProductsListingComponent>
    );
  }
}

export default connect()(ProductsListingLayer);
