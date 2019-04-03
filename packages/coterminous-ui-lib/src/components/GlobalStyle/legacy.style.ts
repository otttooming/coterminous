import { css } from 'styled-components';

export const legacy = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 1em;
    -webkit-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  @media screen and (max-width: 767px) {
    html {
      font-size: 0.75em;
    }
  }

  body {
    overflow-x: hidden;
    margin: 0;
    text-shadow: none;
    font-size: 0.875rem;
  }

  .required {
    color: #a30000;
  }

  .edit {
    color: #ffc000;
  }

  .amount {
    display: inline-block;
    padding: 4px 8px;
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    box-shadow: none;
    font-family: 'Oswald', 'Helvetica Neue', Arial, sans-serif;
    line-height: normal;
  }
  .product__price-block .amount {
    padding: 0;
    box-shadow: none;
  }

  .qty {
    width: 50px;
  }

  .d-inlineblock {
    display: inline-block;
  }

  .ws-wrap {
    white-space: normal !important;
  }

  .content__common {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    text-shadow: none;
  }

  .bg__common {
    border-radius: 4px;
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
  }
  .bg__common--light {
    background: rgba(255, 255, 255, 0.85);
    color: #000;
  }

  .bg__site {
    position: fixed;
    background-image: radial-gradient(
      circle at 50%,
      rgba(17, 52, 181, 0.9) 40%,
      rgba(234, 0, 64, 0.9) 100%
    );
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: translate3d(0, 0, 0);
    z-index: -1;
    backface-visibility: hidden;
  }

  .container {
    box-sizing: border-box;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
  }
  .container--no-gutters {
    padding-right: 0;
    padding-left: 0;
  }

  .row {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin-right: -8px;
    margin-left: -8px;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }
  .row--no-gutters {
    margin: 0;
  }
  .row--reverse {
    flex-direction: row-reverse;
  }

  .col--reverse {
    flex-direction: column-reverse;
  }

  .col-xs,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-offset-0,
  .col-xs-offset-1,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12 {
    padding: 8px;
    flex: 0 0 auto;
  }

  .col-xs {
    max-width: 100%;
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xs-1 {
    max-width: 8.33333333%;
    flex-basis: 8.33333333%;
  }

  .col-xs-2 {
    max-width: 16.66666667%;
    flex-basis: 16.66666667%;
  }

  .col-xs-3 {
    max-width: 25%;
    flex-basis: 25%;
  }

  .col-xs-4 {
    max-width: 33.33333333%;
    flex-basis: 33.33333333%;
  }

  .col-xs-5 {
    max-width: 41.66666667%;
    flex-basis: 41.66666667%;
  }

  .col-xs-6 {
    max-width: 50%;
    flex-basis: 50%;
  }

  .col-xs-7 {
    max-width: 58.33333333%;
    flex-basis: 58.33333333%;
  }

  .col-xs-8 {
    max-width: 66.66666667%;
    flex-basis: 66.66666667%;
  }

  .col-xs-9 {
    max-width: 75%;
    flex-basis: 75%;
  }

  .col-xs-10 {
    max-width: 83.33333333%;
    flex-basis: 83.33333333%;
  }

  .col-xs-11 {
    max-width: 91.66666667%;
    flex-basis: 91.66666667%;
  }

  .col-xs-12 {
    max-width: 100%;
    flex-basis: 100%;
  }

  .col-xs-offset-0 {
    margin-left: 0;
  }

  .col-xs-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-xs-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-xs-offset-3 {
    margin-left: 25%;
  }

  .col-xs-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-xs-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-xs-offset-6 {
    margin-left: 50%;
  }

  .col-xs-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-xs-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-xs-offset-9 {
    margin-left: 75%;
  }

  .col-xs-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-xs-offset-11 {
    margin-left: 91.66666667%;
  }

  .start-xs {
    text-align: start;
    justify-content: flex-start;
  }

  .center-xs-col-standalone {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .center-xs-row-standalone {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .center-xs {
    text-align: center;
    justify-content: center;
  }

  .end-xs {
    text-align: end;
    justify-content: flex-end;
  }

  .top-xs {
    align-items: flex-start;
  }

  .middle-xs {
    align-items: center;
  }

  .bottom-xs {
    align-items: flex-end;
  }

  .around-xs {
    justify-content: space-around;
  }

  .between-xs {
    justify-content: space-between;
  }

  .first-xs {
    order: -1;
  }

  .last-xs {
    order: 1;
  }

  @media only screen and (min-width: 544px) {
    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-offset-0,
    .col-sm-offset-1,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9,
    .col-sm-offset-10,
    .col-sm-offset-11,
    .col-sm-offset-12 {
      padding: 8px;
      flex: 0 0 auto;
    }
    .col-sm {
      max-width: 100%;
      flex-basis: 0;
      flex-grow: 1;
    }
    .col-sm-1 {
      max-width: 8.33333333%;
      flex-basis: 8.33333333%;
    }
    .col-sm-2 {
      max-width: 16.66666667%;
      flex-basis: 16.66666667%;
    }
    .col-sm-3 {
      max-width: 25%;
      flex-basis: 25%;
    }
    .col-sm-4 {
      max-width: 33.33333333%;
      flex-basis: 33.33333333%;
    }
    .col-sm-5 {
      max-width: 41.66666667%;
      flex-basis: 41.66666667%;
    }
    .col-sm-6 {
      max-width: 50%;
      flex-basis: 50%;
    }
    .col-sm-7 {
      max-width: 58.33333333%;
      flex-basis: 58.33333333%;
    }
    .col-sm-8 {
      max-width: 66.66666667%;
      flex-basis: 66.66666667%;
    }
    .col-sm-9 {
      max-width: 75%;
      flex-basis: 75%;
    }
    .col-sm-10 {
      max-width: 83.33333333%;
      flex-basis: 83.33333333%;
    }
    .col-sm-11 {
      max-width: 91.66666667%;
      flex-basis: 91.66666667%;
    }
    .col-sm-12 {
      max-width: 100%;
      flex-basis: 100%;
    }
    .col-sm-offset-0 {
      margin-left: 0;
    }
    .col-sm-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-sm-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-sm-offset-3 {
      margin-left: 25%;
    }
    .col-sm-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-sm-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-sm-offset-6 {
      margin-left: 50%;
    }
    .col-sm-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-sm-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-sm-offset-9 {
      margin-left: 75%;
    }
    .col-sm-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-sm-offset-11 {
      margin-left: 91.66666667%;
    }
    .start-sm {
      text-align: start;
      justify-content: flex-start;
    }
    .center-sm {
      text-align: center;
      justify-content: center;
    }
    .end-sm {
      text-align: end;
      justify-content: flex-end;
    }
    .top-sm {
      align-items: flex-start;
    }
    .middle-sm {
      align-items: center;
    }
    .bottom-sm {
      align-items: flex-end;
    }
    .around-sm {
      justify-content: space-around;
    }
    .between-sm {
      justify-content: space-between;
    }
    .first-sm {
      order: -1;
    }
    .last-sm {
      order: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-0,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12 {
      padding: 8px;
      flex: 0 0 auto;
    }
    .col-md {
      max-width: 100%;
      flex-basis: 0;
      flex-grow: 1;
    }
    .col-md-1 {
      max-width: 8.33333333%;
      flex-basis: 8.33333333%;
    }
    .col-md-2 {
      max-width: 16.66666667%;
      flex-basis: 16.66666667%;
    }
    .col-md-3 {
      max-width: 25%;
      flex-basis: 25%;
    }
    .col-md-4 {
      max-width: 33.33333333%;
      flex-basis: 33.33333333%;
    }
    .col-md-5 {
      max-width: 41.66666667%;
      flex-basis: 41.66666667%;
    }
    .col-md-6 {
      max-width: 50%;
      flex-basis: 50%;
    }
    .col-md-7 {
      max-width: 58.33333333%;
      flex-basis: 58.33333333%;
    }
    .col-md-8 {
      max-width: 66.66666667%;
      flex-basis: 66.66666667%;
    }
    .col-md-9 {
      max-width: 75%;
      flex-basis: 75%;
    }
    .col-md-10 {
      max-width: 83.33333333%;
      flex-basis: 83.33333333%;
    }
    .col-md-11 {
      max-width: 91.66666667%;
      flex-basis: 91.66666667%;
    }
    .col-md-12 {
      max-width: 100%;
      flex-basis: 100%;
    }
    .col-md-offset-0 {
      margin-left: 0;
    }
    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-md-offset-3 {
      margin-left: 25%;
    }
    .col-md-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-md-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-md-offset-6 {
      margin-left: 50%;
    }
    .col-md-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-md-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-md-offset-9 {
      margin-left: 75%;
    }
    .col-md-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-md-offset-11 {
      margin-left: 91.66666667%;
    }
    .start-md {
      text-align: start;
      justify-content: flex-start;
    }
    .center-md {
      text-align: center;
      justify-content: center;
    }
    .end-md {
      text-align: end;
      justify-content: flex-end;
    }
    .top-md {
      align-items: flex-start;
    }
    .middle-md {
      align-items: center;
    }
    .bottom-md {
      align-items: flex-end;
    }
    .around-md {
      justify-content: space-around;
    }
    .between-md {
      justify-content: space-between;
    }
    .first-md {
      order: -1;
    }
    .last-md {
      order: 1;
    }
  }

  @media only screen and (min-width: 992px) {
    .container {
      width: 100%;
      max-width: 1200px;
    }
    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-offset-0,
    .col-lg-offset-1,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12 {
      padding: 8px;
      flex: 0 0 auto;
    }
    .col-lg {
      max-width: 100%;
      flex-basis: 0;
      flex-grow: 1;
    }
    .col-lg-1 {
      max-width: 8.33333333%;
      flex-basis: 8.33333333%;
    }
    .col-lg-2 {
      max-width: 16.66666667%;
      flex-basis: 16.66666667%;
    }
    .col-lg-3 {
      max-width: 25%;
      flex-basis: 25%;
    }
    .col-lg-4 {
      max-width: 33.33333333%;
      flex-basis: 33.33333333%;
    }
    .col-lg-5 {
      max-width: 41.66666667%;
      flex-basis: 41.66666667%;
    }
    .col-lg-6 {
      max-width: 50%;
      flex-basis: 50%;
    }
    .col-lg-7 {
      max-width: 58.33333333%;
      flex-basis: 58.33333333%;
    }
    .col-lg-8 {
      max-width: 66.66666667%;
      flex-basis: 66.66666667%;
    }
    .col-lg-9 {
      max-width: 75%;
      flex-basis: 75%;
    }
    .col-lg-10 {
      max-width: 83.33333333%;
      flex-basis: 83.33333333%;
    }
    .col-lg-11 {
      max-width: 91.66666667%;
      flex-basis: 91.66666667%;
    }
    .col-lg-12 {
      max-width: 100%;
      flex-basis: 100%;
    }
    .col-lg-offset-0 {
      margin-left: 0;
    }
    .col-lg-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-lg-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-lg-offset-3 {
      margin-left: 25%;
    }
    .col-lg-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-lg-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-lg-offset-6 {
      margin-left: 50%;
    }
    .col-lg-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-lg-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-lg-offset-9 {
      margin-left: 75%;
    }
    .col-lg-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-lg-offset-11 {
      margin-left: 91.66666667%;
    }
    .start-lg {
      text-align: start;
      justify-content: flex-start;
    }
    .center-lg {
      text-align: center;
      justify-content: center;
    }
    .end-lg {
      text-align: end;
      justify-content: flex-end;
    }
    .top-lg {
      align-items: flex-start;
    }
    .middle-lg {
      align-items: center;
    }
    .bottom-lg {
      align-items: flex-end;
    }
    .around-lg {
      justify-content: space-around;
    }
    .between-lg {
      justify-content: space-between;
    }
    .first-lg {
      order: -1;
    }
    .last-lg {
      order: 1;
    }
  }

  .align-self-center {
    align-self: center;
  }

  .f-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    background: rgba(52, 6, 68, 0.4);
    box-shadow: none;
  }

  .container__content {
    flex-grow: 1;
  }

  .container__footer {
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
  }

  .m-10-0-10-0 {
    margin: 8px 0 8px 0;
  }

  .m-0-0-20-0 {
    margin: 0 0 16px 0;
  }

  .m-20-0-20-0 {
    margin: 16px 0 16px 0;
  }

  .col2-set {
    display: flex;
    flex-wrap: wrap;
  }
  .col2-set .col-1,
  .col2-set .col-2 {
    padding: 16px;
    flex: 1 0 270px;
  }

  .is-disabled {
    display: none;
  }

  .f-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .w-100 {
    width: 100%;
  }

  .c-warm {
    color: #ffc000 !important;
  }

  @media only screen and (min-width: 980px) {
    .hidden-desktop {
      display: none !important;
    }
  }

  .hidden-xs-up {
    display: none !important;
  }

  @media (max-width: 543px) {
    .hidden-xs-down {
      display: none !important;
    }
  }

  @media (min-width: 544px) {
    .hidden-sm-up {
      display: none !important;
    }
  }

  @media (max-width: 767px) {
    .hidden-sm-down {
      display: none !important;
    }
  }

  @media (min-width: 768px) {
    .hidden-md-up {
      display: none !important;
    }
  }

  @media (max-width: 991px) {
    .hidden-md-down {
      display: none !important;
    }
  }

  @media (min-width: 992px) {
    .hidden-lg-up {
      display: none !important;
    }
  }

  @media (max-width: 1199px) {
    .hidden-lg-down {
      display: none !important;
    }
  }

  @media (min-width: 1200px) {
    .hidden-xl-up {
      display: none !important;
    }
  }

  .hidden-xl-down {
    display: none !important;
  }

  .header {
    position: relative;
  }
  .header__cart {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .cart-links {
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    height: 42px;
    box-sizing: border-box;
  }
  .cart-links__title {
    text-transform: uppercase;
    margin: 0 10px;
  }
  .cart-links svg {
    flex: 0 0 18px;
  }

  .header-variant2__wrap {
    display: flex;
    box-sizing: border-box;
    padding: 10px 15px;
    align-items: center;
    justify-content: center;
  }

  .main-nav-top-right {
    display: flex;
    float: right;
    justify-content: flex-end;
  }
  .main-nav-top-right li:last-child {
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }

  .list-style-none {
    list-style: none;
  }

  .list-reset {
    padding-left: 0;
    list-style: none;
  }

  .p1 {
    padding: 16px;
  }

  .pt1 {
    padding-top: 16px;
  }

  .pr1 {
    padding-right: 16px;
  }

  .pb1 {
    padding-bottom: 16px;
  }

  .pl1 {
    padding-left: 16px;
  }

  .py1 {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .px1 {
    padding-right: 16px;
    padding-left: 16px;
  }

  .pt10 {
    padding-top: 8px;
  }

  .m1 {
    margin: 16px;
  }

  .mt1 {
    margin-top: 16px;
  }

  .mr1 {
    margin-right: 16px;
  }

  .mb1 {
    margin-bottom: 16px;
  }

  .ml1 {
    margin-left: 16px;
  }

  .mx1 {
    margin-right: 16px;
    margin-left: 16px;
  }

  .my1 {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .m-10-0-0-0 {
    margin-top: 8px;
  }

  .left-align {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  .right-align {
    text-align: right;
  }

  .justify {
    text-align: justify;
  }

  .w100 {
    width: 100%;
  }

  .d__block {
    display: block;
  }

  .d__flex {
    display: flex;
    flex-wrap: wrap;
  }

  .grid__slider {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    margin: 0 0 16px;
    text-align: center;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }
  .grid__slider .textwidget {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .aspect-ratio {
    position: relative;
    width: 100%;
  }
  .aspect-ratio__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .product-grid {
    width: 100%;
    margin: 0;
  }

  .slider-promo__wrapper {
    align-items: center;
  }
  .slider-promo__wrapper img {
    width: 100%;
  }

  .slider-conf__v-cent {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-slide {
    height: auto;
  }

  .woocommerce-error,
  .woocommerce-message {
    display: flex;
    margin: 8px 0;
    padding: 8px 16px;
    list-style: none;
    border-radius: 4px;
    background: #340644;
    box-shadow: none;
    align-items: center;
    flex-wrap: wrap;
  }
  .woocommerce-error li,
  .woocommerce-message li {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .woocommerce-error .button,
  .woocommerce-message .button {
    margin-right: 16px;
  }

  .woocommerce-error {
    background: #a30000;
  }

  .woocommerce-message,
  .woocommerce-success {
    background: #00b31a;
  }

  .products-listing__item {
    position: relative;
    border-radius: 4px;
    padding: 0;
    margin-bottom: 16px;
    border-right: 1px solid #340644;
    background: #fff;
    overflow: hidden;
    box-shadow: none;
  }

  .products-listing__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .products-listing__name {
    color: #000;
    background: rgba(255, 255, 255, 0.85);
    padding: 4px;
    width: 100px;
    white-space: nowrap;
    border-radius: 0 4px 0 0;
    overflow: hidden;
    text-transform: uppercase;
    text-overflow: ellipsis;
    font-size: 0.75em;
    font-weight: 300;
    text-shadow: none;
    margin: 0;
    position: absolute;
    bottom: 0;
  }

  .products-listing__price-block {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 4px 16px;
    text-align: center;
    color: #fff;
    border-radius: 4px 0 0 0;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    box-shadow: none;
    font-size: 0.75em;
    flex: 1;
  }
  .products-listing__price-block del,
  .products-listing__price-block ins {
    display: block;
  }
  .products-listing__price-block .amount {
    padding: 0;
    color: #fff !important;
    box-shadow: none;
    font-size: 0.75em;
  }
  .products-listing__price-block-big .amount {
    font-size: 1rem;
  }
  .products-listing__price-block + .button {
    margin: 0 0 0 4px;
  }

  .product__title {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(52, 6, 68, 0.5);
  }

  .product__mainblock {
    padding: 16px;
    border-radius: 4px;
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
    flex: 1 0 310px;
  }

  .product__left-wrap {
    height: 100%;
  }
  @media only screen and (min-width: 768px) {
    .product__left-wrap {
      position: sticky;
      top: 0;
    }
  }

  .product__main-image {
    display: block;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: none;
  }
  .product__main-image img {
    border-radius: 4px;
  }

  .product__banner {
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 4px;
    background: rgba(186, 0, 251, 0.15);
    flex: 1 0 180px;
  }

  .product__gallery-control {
    display: none;
    margin: 16px 0 0;
  }

  .product .swiper-wrapper {
    align-items: center;
  }

  .product__image {
    box-sizing: border-box;
    padding: 1px;
  }

  .product__price-block {
    text-align: center;
    color: #fff !important;
    border-radius: 4px;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    box-shadow: none;
    font-size: 13px;
    line-height: normal;
    flex: 1;
    padding: 1rem;
  }
  .product__price-block del,
  .product__price-block ins {
    display: block;
  }
  .product__price-block .amount {
    color: #fff !important;
    font-size: 0.75em;
  }
  .product__price-block-big {
    font-size: 1.5rem;
  }
  .product__price-block + .button {
    margin: 0 0 0 4px;
  }

  .product__buy-btn {
    overflow: hidden;
    max-width: 80px;
    text-overflow: ellipsis;
    flex: 1;
  }

  .product__details-wrap {
    padding: 16px;
    border-radius: 4px;
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
  }
  .product__details-wrap > div:last-child {
    margin-bottom: 0;
  }

  .product__details-block {
    margin-bottom: 16px;
  }

  .product__attributes td,
  .product__attributes p {
    letter-spacing: 1px;
  }

  .product__attributes td {
    width: 100%;
  }

  .product__attributes p {
    margin: 0;
  }

  .addto {
    display: flex;
    width: 100%;
    width: calc(100% + 2 * 8px);
    margin: 0 -8px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .addto td {
    padding: 0;
    font-family: 'Oswald', 'Helvetica Neue', Arial, sans-serif;
  }
  .addto td.value {
    text-align: right;
  }
  .addto input[type='submit'] {
    display: none;
  }
  .addto .qty-block {
    flex: 1 0 150px;
  }
  .addto .button {
    display: flex;
    margin: 0 8px;
    align-items: center;
    flex: 1 0 150px;
    justify-content: center;
  }
  .addto .variations_button {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .addto__icon {
    margin: 0 4px 0 0;
  }

  .product-stock {
    margin: 16px 0;
  }

  .product-meta a {
    display: inline-block;
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 4px 16px;
    text-transform: uppercase;
    color: #333;
    border-radius: 15px;
    background: #ffc000;
    box-shadow: none;
    text-shadow: none;
    font-size: 0.75em;
  }

  .product-qty__wrap {
    display: flex;
    margin: 8px;
    padding: 0 8px;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
    align-items: center;
    justify-content: center;
  }
  .product-qty__wrap label {
    height: 42px;
    text-transform: none;
    line-height: 42px;
  }
  .product-qty__wrap input {
    display: flex;
    border: 0 !important;
    background: none;
    box-shadow: none;
    font-size: 17px;
  }

  .sale {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    padding: 4px 8px;
    border-radius: 0 0 0 4px;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    align-items: center;
  }
  .sale__label {
    margin-right: 8px;
  }

  .product-thumb__gallery {
    margin-top: 16px;
    column-count: 4;
    column-gap: 4px;
    padding: 4px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: none;
  }

  .product-thumb__link {
    width: 100%;
  }

  .related {
    overflow: hidden;
  }
  .related__wrapper {
    padding-right: 0;
    padding-left: 0;
  }

  .product-variations__attribute {
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 4px 16px;
    text-transform: uppercase;
    color: #333;
    border-radius: 15px;
    background: #ffc000;
    box-shadow: none;
    text-shadow: none;
    font-size: 0.75em;
  }

  .product-variations__cart {
    display: flex;
  }

  .product-variations__price {
    display: inline-block;
    padding: 4px 16px;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    box-shadow: none;
    font-size: 0.75em;
  }

  .control__items {
    user-select: none;
  }

  .control__up,
  .control__down,
  .control__prev,
  .control__next {
    padding: 5px;
    cursor: pointer;
    transition: color 500ms;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }
  .control__up path,
  .control__down path,
  .control__prev path,
  .control__next path {
    transition: transform 500ms;
    transform-origin: 50% 50%;
  }

  .control__up path {
    transform: rotate(-90deg);
  }

  .control__down path {
    transform: rotate(90deg);
  }

  .swiper-button-disabled {
    cursor: not-allowed;
    color: #340644;
  }

  .lazyload,
  .lazyloading {
    opacity: 0;
  }

  .lazyloaded {
    transition: opacity 300ms;
    opacity: 1;
  }

  .img-padding-ratio__wrap {
    position: relative;
    width: 100%;
  }
  .img-padding-ratio__wrap a,
  .img-padding-ratio__wrap img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .skaala_paremale {
    display: flex;
    flex-wrap: wrap;
  }

  .progress-bar {
    width: 100%;
    padding: 16px;
    margin-bottom: 4px;
    background-color: rgba(186, 0, 251, 0.15);
    border-radius: 4px;
  }
  .progress-bar__title {
    margin-bottom: 8px;
  }
  .progress-bar__graph {
    position: relative;
    background-color: rgba(186, 0, 251, 0.15);
    border-radius: 15px;
  }
  .progress-bar__percentage {
    position: relative;
    z-index: 1;
    color: #000;
    left: 16px;
    text-shadow: none;
  }
  .progress-bar__value {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #ffc000;
    border-radius: 15px;
  }

  .menu {
    list-style: none;
    text-transform: uppercase;
  }
  .menu li {
    list-style: none;
  }
  .menu > li:last-child {
    margin-right: 0;
  }
  .menu img {
    width: 15px;
  }
  .menu__item {
    display: inline-block;
    margin-right: 8px;
    transition: background 500ms;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
    line-height: 42px;
  }
  .menu__item:hover {
    background: linear-gradient(45deg, #ff00f6, #00a99d);
  }
  .menu__item--selected {
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(45deg, #ff00f6, #00a99d);
    box-shadow: none;
  }
  .menu__link {
    padding: 0 24px;
  }

  .sub-menu {
    display: none;
  }
  .sub-menu__item {
    display: block;
    text-align: left;
    margin-bottom: 4px;
  }
  .sub-menu__item img {
    display: inline-block;
    width: 20px;
    margin-right: 8px;
  }
  .sub-menu__link {
    padding: 16px 8px;
  }

  .bc {
    overflow: hidden;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 0.75em;
    border-radius: 4px;
    box-shadow: none;
    padding: 16px;
  }
  .bc a {
    color: #ffc000;
  }
  .bc__delim {
    margin: 0 3px;
  }
  .bc__item {
    padding: 0 4px;
  }

  .woocommerce-MyAccount-navigation {
    margin-bottom: 16px;
  }
  .woocommerce-MyAccount-navigation ul {
    display: flex;
    list-style: none;
  }
  .woocommerce-MyAccount-navigation li {
    margin: 4px 4px 4px 0;
    border-radius: 4px;
    box-shadow: none;
  }
  .woocommerce-MyAccount-navigation a {
    padding: 4px 16px;
  }
  .woocommerce-MyAccount-navigation .is-active {
    background: linear-gradient(45deg, #ff00f6, #00a99d);
  }

  .filters-menu__wrap {
    display: flex;
    position: relative;
  }

  .cat-list__title {
    position: relative;
    display: flex;
    height: 35px;
    margin: 0 0 10px 0;
    padding: 0 70px 0 0;
    text-align: left;
    color: #ffc000;
    font-size: 14px;
    align-items: center;
  }

  .cat-list__name {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cat-list__desc {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-transform: none;
    text-overflow: ellipsis;
    color: #fff;
    font-size: 0.75em;
  }

  .cat-list__count {
    position: absolute;
    top: 50%;
    right: 35px;
    display: inline-block;
    padding: 2px 11px;
    transform: translateY(-50%);
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.7em;
  }

  .cat-list__subcat {
    display: none;
    padding: 0 0 0 24px;
    list-style: none;
    border-left: 1px solid #a30000;
  }
  .cat-list__group-open .cat-list__subcat {
    display: block;
  }

  .cat-list__subcat-control {
    position: absolute;
    top: 0;
    right: -10px;
  }
  .cat-list__subcat-control svg {
    border-radius: 50%;
  }

  .subcat__grid {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .subcat__item {
    border-radius: 4px;
    background-color: #340644;
    box-shadow: none;
    margin-right: 16px;
    margin-bottom: 16px;
  }

  .subcat__title {
    position: relative;
    display: flex;
    height: 20px;
    margin: 0;
    padding: 8px 70px 8px 16px;
    text-align: left;
    color: #ffc000;
    font-size: 14px;
    align-items: center;
  }

  .subcat__name {
    display: block;
    overflow: hidden;
    padding: 0 16px 0 0;
    text-overflow: ellipsis;
  }

  .subcat__desc {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-transform: none;
    text-overflow: ellipsis;
    color: #fff;
    font-size: 0.75em;
  }

  .subcat__count {
    position: absolute;
    top: 50%;
    right: 20px;
    display: inline-block;
    padding: 2px 11px;
    transform: translateY(-50%);
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.7em;
  }

  .subcat__subcat {
    display: none;
    margin: 0 -20px;
    padding: 0 0 0 25px;
    list-style: none;
    border-left: 1px solid #a30000;
  }
  .cat-list__group-open .subcat__subcat {
    display: block;
  }

  .subcat__subcat-control {
    position: absolute;
    top: 0;
    right: -10px;
  }
  .subcat__subcat-control svg {
    border-radius: 50%;
  }

  .menu-mobile {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    width: 320px;
    padding: 16px;
    transition: transform 500ms linear;
    transform: translate3d(320px, 0, 0);
    background: rgba(52, 6, 68, 0.5);
  }
  .menu-mobile_open .menu-mobile {
    transform: translate3d(0, 0, 0);
  }
  .menu-mobile__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    right: 20px;
    height: 42px;
    cursor: pointer;
    line-height: 1;
    font-size: 1em;
    margin-left: 10px;
  }
  .menu-mobile__toggle svg {
    margin-left: 10px;
    flex: 0 0 16px;
  }
  .menu-mobile__primary,
  .menu-mobile__secondary,
  .menu-mobile__categories {
    margin: 0 0 16px;
  }

  .wrapper {
    transition: transform 500ms linear, opacity 500ms;
  }
  .menu-mobile_open .wrapper {
    transform: translate3d(-320px, 0, 0);
    opacity: 0.5;
  }

  .search__form {
    display: flex;
  }

  .search__field,
  .search__select {
    box-sizing: border-box;
    height: 48px !important;
    padding: 0 16px;
    box-shadow: none;
    line-height: 48px;
  }

  .search__field {
    border-radius: 4px 0 0 4px !important;
    flex: 4;
  }

  .search__select {
    text-transform: uppercase;
    border-radius: 0;
    background: #340644;
    color: #fff;
    flex: 2;
    max-width: 130px;
  }

  .search__button {
    height: 48px;
    padding: 0 10px 0 30px;
    border-radius: 0 4px 4px 0;
    background: linear-gradient(45deg, #ff00f6, #00a99d);
    flex: 1;
    position: relative;
  }
  .search__button svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .cart__collaterals td,
  .cart__collaterals span {
    text-align: right;
  }

  .cart__thumbnail {
    width: 55px;
    margin-right: 8px;
  }

  .cart__product-name {
    display: flex;
    align-items: center;
  }

  .shop_table thead {
    background: rgba(186, 0, 251, 0.15);
  }

  .shop_table tr:nth-child(2) {
    background: rgba(186, 0, 251, 0.15);
  }

  .shop_table tfoot {
    background: rgba(186, 0, 251, 0.15);
  }
  .shop_table tfoot tr:last-child {
    background: rgba(186, 0, 251, 0.15);
  }

  .shop_table td:last-child,
  .shop_table th:last-child {
    text-align: right;
  }

  .cart__form-head {
    background: rgba(186, 0, 251, 0.15);
  }

  .cart__form-body img {
    border-radius: 4px;
  }

  .cart__form-body tr:nth-child(2) {
    background: rgba(186, 0, 251, 0.15);
  }

  .cart__form-footer {
    background: rgba(186, 0, 251, 0.15);
  }

  .cart .product-price,
  .cart .product-quantity,
  .cart .product-subtotal,
  .cart .product-remove {
    text-align: center;
  }

  .cart_totals tr:nth-child(2) {
    background: rgba(186, 0, 251, 0.15);
  }

  .cart-checkout__place-order {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cart-checkout__place-order .terms {
    margin: 0;
    padding: 16px;
    border-radius: 4px;
    background-color: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }

  .cart-checkout__place-order-button {
    float: right;
  }

  .checkout {
    font-size: 1rem;
  }
  .checkout__tab-content {
    box-sizing: border-box;
    padding: 16px;
    background: rgba(52, 6, 68, 0.3);
  }
  @media (max-width: 767px) {
    .checkout__tab-content.tap-order {
      padding: 16px 4px;
    }
  }

  .checkout_cart .product-total {
    text-align: right;
  }

  #shipping_method li {
    display: flex;
    flex-direction: row-reverse;
    margin: 0 0 16px;
  }
  #shipping_method li label {
    display: flex;
    margin-right: 16px;
    align-items: center;
  }

  #shipping_method .amount {
    margin-left: 10px;
  }

  .coupon {
    margin: 0 0 16px;
  }

  .wc-terms-and-conditions,
  .wc_payment_method {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .wc-terms-and-conditions img,
  .wc_payment_method img {
    width: 50px;
    margin: 8px 0;
    display: block;
  }
  .wc-terms-and-conditions input,
  .wc_payment_method input {
    margin-right: 16px;
  }

  .payment_box {
    margin: 8px 0;
    padding: 16px;
    width: 100%;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }

  .checkout input[type='email'],
  .checkout input[type='tel'],
  .checkout input[type='text'] {
    width: 50%;
  }

  .sidebar_grid > .widget-container {
    margin: 0 0 16px;
    padding: 16px 24px;
    border-radius: 4px;
    background-color: rgba(186, 0, 251, 0.15);
    box-shadow: none;
  }

  .form-login {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .form-login__col {
    box-sizing: border-box;
    padding: 16px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }

  .pagination {
    margin-right: -8px;
    margin-left: -8px;
    user-select: none;
  }
  .pagination__btn {
    margin-left: 8px;
    margin-right: 8px;
  }

  .txt-center {
    text-align: center;
  }

  .price__block {
    margin: 0 5px;
  }
`;
