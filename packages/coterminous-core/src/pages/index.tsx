import * as Routing from "../services/routing/routing";
import { getMainMenu, getSideMenu } from "../services/menuApi/menuApi";

import {
  CART_SLUGS,
  CHECKOUT_SLUGS,
  LOCATION_TYPES,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
  LANDING_SLUGS,
  SITE_NAME,
  CATEGORY_SLUGS,
  VIEW_NAMES,
  PAGE_SLUGS,
} from "../common/products/constants";

import * as React from "react";
import "isomorphic-unfetch";
import Main from "../layouts/Main";

import * as ReactPaginate from "react-paginate";
import ProductsListing from "../components/productsListing/ProductsListing";
import CategoriesListing, {
  CategoryProps,
} from "../components/categoriesListing/CategoriesListing";
import CartView from "../components/cartView/CartView";
import CheckoutView from "../components/checkoutView/CheckoutView";
import LandingView from "../components/landingView/LandingView";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductItem from "../components/productItem/ProductItem";
import Loader from "../components/loader/Loader";

import * as withRedux from "next-redux-wrapper";
import { reduxForm, getFormValues, InjectedFormProps } from "redux-form";

import {
  FormValues,
  LocationChangeProps,
  ProductProps,
} from "../common/products/typings";

import { initStore } from "../store";
import PageView from "../components/pageView/PageView";
import { PageProps } from "../services/pageApi/pageApi";
import { getMultipleSingleProducts } from "../services/productApi/singleProductApi";

interface Props extends InjectedFormProps {
  categories: CategoryProps[];
  menuItems: any;
  products: any;
  formValues: FormValues;
  initialRouting: State;
}

export interface State {
  categories: CategoryProps[];
  isLoaderActive: boolean;
  products?: ProductProps[] | undefined;
  productsInCart?: ProductProps[] | undefined;
  navRouting?: LocationChangeProps;
  singleProduct?: any;
  page?: PageProps;
}

interface InitialProps {
  query: any;
  res: any;
}

class IndexPage extends React.Component<Props, State> {
  static async getInitialProps({ query, res }: InitialProps) {
    const menuItems = await getMainMenu();
    const categories = await getSideMenu();

    const navRouting: LocationChangeProps = Routing.createNavRoutingFromQuery(
      query
    );

    const initialProps: State = {
      navRouting,
      categories,
      isLoaderActive: false,
    };

    const initialRouting: State = await Routing.handleRouting(initialProps);

    return {
      express: { query },
      menuItems,
      categories,
      initialRouting,
    };
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      categories: props.categories,
      singleProduct: null,
      isLoaderActive: false,
      ...props.initialRouting,
    };
  }

  componentDidMount() {
    window.onpopstate = this.handleBackButtonEvent;
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.formValues && nextProps.formValues.cartItems) {
      this.handleCartItems(nextProps);
    }
  }

  handleBackButtonEvent = () => {
    const query = { path: window.location.pathname };

    const navRouting: LocationChangeProps = Routing.createNavRoutingFromQuery(
      query
    );

    this.handleLocationChange(navRouting);
  };

  handlePagination = (props: any) => {
    const page = props.selected + 1;

    const nextNavRouting = {
      ...this.state.navRouting,
      page,
    };

    this.handleLocationChange(nextNavRouting);
  };

  handleHistoryChange = (navRouting: LocationChangeProps) => {
    Routing.handleHistoryChange(navRouting);

    this.setState({ isLoaderActive: false });
  };

  handleLocationChange = async (navRouting: LocationChangeProps) => {
    this.setState({ isLoaderActive: true });

    const props = { ...this.state, navRouting };

    const routing = await Routing.handleRouting(props);

    this.setState({ navRouting, ...routing }, () => {
      this.handleHistoryChange(this.state.navRouting);
    });
  };

  handleCartItems = async (nextProps: Props) => {
    if (!nextProps.formValues) {
      return;
    }

    const cartItems = nextProps.formValues.cartItems;

    const slugs = Object.values(cartItems).map(item => item.productSlug);
    const uniqueSlugs = [...new Set(slugs)];

    const products = await getMultipleSingleProducts(uniqueSlugs);

    this.setState(
      {
        productsInCart: products,
      },
      () => this.calculatePrice(nextProps)
    );
  };

  calculatePrice = (nextProps: Props) => {
    if (!nextProps.formValues || !this.state.productsInCart) {
      return;
    }

    const cartItems = Object.values(nextProps.formValues.cartItems);

    const productsInCart = this.state.productsInCart;

    const variations = productsInCart.reduce(
      (acc, cur) => [...acc, ...cur.variations],
      []
    );

    const price = variations.reduce(
      (acc, cur) =>
        acc +
        Number(cur.price) *
          cartItems.find(item => item.variationId === cur.id).quantity,
      0
    );

    console.log(variations, price);
  };

  render() {
    const { menuItems, categories, formValues } = this.props;
    const { navRouting } = this.state;
    const { totalPages = 1, page = 1 } = navRouting;

    return (
      <Main
        renderHeader={
          <Header
            title="Products"
            menuItems={menuItems}
            handleLocationChange={this.handleLocationChange}
          />
        }
        renderSidebar={
          !!(
            navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT ||
            navRouting.view === CATEGORY_SLUGS.DEFAULT
          ) && (
            <CategoriesListing
              categories={categories}
              onLocationChange={this.handleLocationChange}
            />
          )
        }
        renderAfterMain={
          !!(
            navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT ||
            navRouting.view === CATEGORY_SLUGS.DEFAULT
          ) && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={<a href="">...</a>}
              breakClassName={"pagination__btn button medium"}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePagination}
              containerClassName={"pagination"}
              pageClassName={"pagination__btn button medium"}
              nextClassName={"pagination__btn button medium"}
              previousClassName={"pagination__btn button medium"}
              activeClassName={"active"}
            />
          )
        }
        renderFooter={<Footer />}
      >
        <Loader isLoaderActive={this.state.isLoaderActive} />

        {!!(!navRouting.view || navRouting.view === LANDING_SLUGS.DEFAULT) && (
          <LandingView onLocationChange={this.handleLocationChange} />
        )}

        {!!(navRouting.view === PRODUCT_SLUGS.DEFAULT) && (
          <ProductItem
            product={this.state.singleProduct.product}
            images={this.state.singleProduct.images}
            variations={this.state.singleProduct.variations}
          />
        )}

        {!!(
          navRouting.view === PRODUCT_LISTING_SLUGS.DEFAULT ||
          navRouting.view === CATEGORY_SLUGS.DEFAULT
        ) && (
          <ProductsListing
            products={this.state.products}
            onLocationChange={this.handleLocationChange}
          />
        )}

        {!!(navRouting.view === CART_SLUGS.DEFAULT) && (
          <CheckoutView
            productsInCart={
              !this.state.productsInCart ? undefined : this.state.productsInCart
            }
            onLocationChange={this.handleLocationChange}
          />
        )}

        {!!(navRouting.view === CHECKOUT_SLUGS.DEFAULT) && (
          <CheckoutView
            productsInCart={
              !this.state.productsInCart ? undefined : this.state.productsInCart
            }
            onLocationChange={this.handleLocationChange}
          />
        )}

        {!!(navRouting.view === PAGE_SLUGS.DEFAULT) && (
          <PageView
            onLocationChange={this.handleLocationChange}
            page={this.state.page}
          />
        )}
      </Main>
    );
  }
}

const getShoppingCartFormValues = (state: any) => {
  return getFormValues("shoppingCart")(state) as any;
};

const mapStateToProps = (state: any) => ({
  formValues: getShoppingCartFormValues(state),
});

export default withRedux(initStore, mapStateToProps, null)(
  reduxForm({
    form: "shoppingCart",
  })(IndexPage)
);
