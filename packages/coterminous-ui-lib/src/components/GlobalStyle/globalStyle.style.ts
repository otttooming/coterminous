import { css } from 'styled-components';
import { theme } from '../../common/styles/theme';
import { customProperties } from '../../common/styles/customProperties';

export const globalStyleCss = css`
  ${customProperties}

  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    -webkit-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    line-height: 1.2;
    font-family: ${theme.fontFamily.primary};
    color: ${theme.color.dark};
    background-color: #f2f5f7;
  }
`;
