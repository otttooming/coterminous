import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { initStore, startClock, addCount, store, addToCart, removeFromCart, serverRenderClock } from '../store'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  removeFromCart = () => {
    this.props.removeFromCart('2')
  }

  render() {

    return (
      <a className="cart-links amount" href="/cart" title="View your shopping cart">
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 475.084 475.085" className="cart-links__icon"><path d="M365.446 401.998c0 10.092 3.58 18.702 10.71 25.834 7.133 7.14 15.75 10.71 25.846 10.71 10.08 0 18.698-3.57 25.83-10.71 7.14-7.132 10.71-15.742 10.71-25.834s-3.567-18.702-10.71-25.84c-7.132-7.133-15.75-10.705-25.83-10.705-10.096 0-18.713 3.572-25.845 10.704-7.132 7.14-10.71 15.75-10.71 25.84zM469.658 78.51c-3.618-3.617-7.898-5.426-12.848-5.426H113.918c-.193-1.33-.62-3.756-1.287-7.277-.664-3.523-1.186-6.33-1.567-8.425-.383-2.087-1.093-4.61-2.142-7.56-1.046-2.953-2.283-5.287-3.71-6.996-1.425-1.718-3.33-3.19-5.71-4.43-2.376-1.233-5.09-1.853-8.134-1.853h-73.09c-4.95 0-9.233 1.812-12.85 5.424C1.81 45.583 0 49.867 0 54.817s1.81 9.23 5.426 12.846c3.62 3.617 7.902 5.424 12.85 5.424h58.237l50.532 234.976c-.378.76-2.33 4.373-5.852 10.848-3.52 6.477-6.328 12.137-8.42 16.99-2.093 4.86-3.14 8.616-3.14 11.28 0 4.947 1.81 9.23 5.424 12.853 3.62 3.606 7.902 5.42 12.85 5.42h292.348c4.95 0 9.233-1.813 12.848-5.42 3.62-3.62 5.427-7.905 5.427-12.854 0-4.95-1.807-9.234-5.427-12.848-3.614-3.613-7.898-5.427-12.847-5.427h-262.66c4.57-9.138 6.854-15.222 6.854-18.268 0-1.91-.238-4.004-.715-6.283s-1.047-4.805-1.713-7.57c-.667-2.75-1.093-4.798-1.283-6.132l298.075-34.83c4.753-.576 8.658-2.615 11.703-6.14 3.045-3.52 4.564-7.563 4.564-12.134V91.363c-.002-4.948-1.806-9.23-5.426-12.853zM109.632 401.998c0 10.092 3.567 18.702 10.706 25.834 7.14 7.14 15.75 10.71 25.84 10.71 10.086 0 18.7-3.57 25.836-10.71 7.14-7.132 10.71-15.742 10.71-25.834s-3.568-18.702-10.71-25.84c-7.137-7.133-15.75-10.705-25.835-10.705-10.09 0-18.706 3.572-25.843 10.704-7.135 7.14-10.706 15.75-10.706 25.84z" fill="currentColor" /></svg>
        <span className="cart-links__title">Cart</span>
        <span className="cart-links__amount"> {this.props.totalAmount}€</span>
      </a>
    );
  }
}

const mapStateToProps = (state) => (
  {
    cartItems: state.storeReducer.cartItems,
    totalAmount: state.storeReducer.totalAmount
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: bindActionCreators(removeFromCart, dispatch),
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Cart)