const rootSize: number = 16;

function convertNumberToPx(px: number): string {
  return `${px}px`;
}

function convertPxToRem(px: number, root: number): string {
  return `${px / root}rem`;
}

function convertPxToEm(px: number, root: number): string {
  return `${px / root}em`;
}

export interface ColorProps {
  dark: string;
  red: string;
  warm: string;
  white: string;
  green: string;
}

export const color: ColorProps = {
  dark: '#000',
  red: '#a30000',
  warm: '#ffc000',
  white: '#fff',
  green: '#31e184',
};

export interface BackgroundProps {
  main: string;
  input: string;
  section: string;
}
export const background: BackgroundProps = {
  main: 'rgba(186, 0, 251, .15)',
  input: '#9109c7',
  section: '#fff',
};

export enum SpacingSize {
  SMALL = 'small',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  LARGE = 'large',
  HUGE = 'huge',
}

export type SpacingProps = { [valueof in SpacingSize]: string };

export const spacing: SpacingProps = {
  small: convertPxToRem(4, rootSize),
  normal: convertPxToRem(8, rootSize),
  medium: convertPxToRem(16, rootSize),
  large: convertPxToRem(24, rootSize),
  huge: convertPxToRem(48, rootSize),
};

export interface TypefaceNameProps {
  primary: string;
  secondary: string;
}

export interface TypefaceWeightProps {
  thin: number;
  light: number;
  normal: number;
  bold: number;
}

export interface TypefaceSizeProps {
  small: string;
  normal: string;
}

export interface TypefaceProps {
  name: TypefaceNameProps;
  weight: TypefaceWeightProps;
  size: TypefaceSizeProps;
}

export const typeface: TypefaceProps = {
  name: {
    primary: `'Montserrat', 'Helvetica Neue', Arial, sans-serif`,
    secondary: `'Helvetica Neue', Arial, sans-serif`,
  },
  weight: { thin: 100, light: 300, normal: 400, bold: 700 },
  size: {
    small: convertPxToEm(12, rootSize),
    normal: convertPxToEm(16, rootSize),
  },
};

export interface ShadowProps {
  main: string;
}

export const shadow: ShadowProps = { main: 'none' };
