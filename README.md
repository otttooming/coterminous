# coterminous

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
![Powered by TypeScript](https://img.shields.io/badge/powered%20by-typescript-blue.svg)
[![Built with Styled Components](https://img.shields.io/badge/built%20with-styled%20components-db7093.svg)](https://www.styled-components.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## 🔨 Install

```bash
npm install
npm run bootstrap
```

## 📦 Packages

### Store frontend

[@coterminous/store-fe](./packages/store-fe)

React frontend for facilitating ecommerce transactions to end users.

### Store gateway

[@coterminous/store-gw](./packages/store-gw)

### WordPress library

[@coterminous/wp-lib](./packages/wp-lib)

WordPress and WooCommerce REST API helpers.

### User interface library

[@coterminous/ui-lib](./packages/ui-lib)

Visual primitives using [styled-components](https://www.styled-components.com/) for common usage to different frontend services.

## Structure

- `[package-name]-fe` - frontend services
- `[package-name]-be` - backend services
- `[package-name]-gw` - api gateway
- `[package-name]-lib` - reusable library
- `[package-name]-design` - design resources
