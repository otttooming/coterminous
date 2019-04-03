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
`;
